import './App.css';
import React from 'react';
import Header from './Header';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import apiRequest from './apiRequest';

function App() {

  const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:3500/items';

  // useEffect(() => {
  //   const socket = new WebSocket(API_URL);

  //   socket.onopen = () => {
  //     console.log('WebSocket connection established.');
  //   };

  //   socket.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //   };

  //   // Clean up on unmount.
  //   return () => {
  //     socket.close();
  //   };
  // }, [API_URL]);

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shoppinglist')) || []);
  // const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(''); 
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  // console.log("Before useEffects")

  // useEffect(()=>{
  //   setItems(JSON.parse(localStorage.getItem('Shoppinglist')))
  // }, [] )

  // useEffect(()=>{
  //   localStorage.setItem('Shoppinglist', JSON.stringify(items));
  // }, [items] )

  // useEffect(()=>{
  //   setItems()
  // }, [items] )

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  // localStorage.setItem('Shoppinglist', JSON.stringify(items));
  // }

  // Reading the list Items
  
  useEffect(()=>{
    const fetchItems = async() =>{
      try{
      const response = await fetch(API_URL);
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      // console.log(data);
      setItems(data);
      setFetchError(null);  
      }
      catch(error){
        // console.error('Error:', error.stack);
        // console.error('Error:', error .message);
        setFetchError(error.message);
      }
      finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
    (async () => await fetchItems())();
    }, 2000);
  }, [API_URL])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = {id, checked: false, item};
    const listItems = [...items, mynewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(mynewItem)
    }
    const result = await apiRequest(API_URL, postOptions, setFetchError);
    if(result) setFetchError(result);
    // apiRequest(API_URL, postOptions, setFetchError);
  }

  const handleCheck = async (id) => {
  const newItems = items.map((item) => {
      if(item.id === id) {
          return {...item, checked: !item.checked};
      }
      return item;
  });
  setItems(newItems);

  const myItem = newItems.filter((item) => item.id !== id);
  const updateOptiopns = {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({checked: myItem[0].checked})
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptiopns);
  if(result) setFetchError(result);
  // apiRequest(reqUrl, updateOptiopns, setFetchError);
}

  const handleDelete = async (id) => {
  const newItems = items.filter((item) => item.id !== id);
  setItems(newItems);

  const deleteOptions = {method: 'DELETE'};
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);
  if(result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem.trim()) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItems 
        newItem={newItem} 
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems 
        search={search} 
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color: 'red'}}>{`Error:${fetchError}`}</p>}
        {!fetchError && !isLoading &&
        <Content 
          items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer lenght={items.length} />
    </div>
  );

}

export default App;
