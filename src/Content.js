import React from 'react'
// import { useState } from 'react';
// import{FaTrashAlt} from 'react-icons/fa';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {

    // const [name, setName] = useState('Harsh');
    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const names = ['Gurpreet','Harshdeep','Chintu'];
    //     const int = Math.floor(Math.random() * 3);
    //     // return names[int];
    //     setName(names[int]);
    //     return names[int];
    // }

    // const handleClick = () => {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     // console.log("Button clicked");
    //     console.log("Button clicked " + count);
    // }

    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`);

    // }

    // const handleNameChange3 = (e) => {
    //     console.log(e.target.innerText);
    //     console.log("Button clicked " + count);
    // }
  return (
    // <main>

      // {/* <p onDoubleClick={handleClick}>
      //   Hello {handleNameChange()}! 
      //   Hello {name}! 
      // </p> */}
      // {/* <button onClick={handleClick}>Click It </button> 
      // <button onClick={handleNameChange}>Click to Change Name</button>
      // <button onClick={handleClick}>Click to Change Name</button>
      // <button onClick={() => handleClick2(handleNameChange())}>Click Name</button>
      // <button onClick={(e) => handleNameChange3(e)}>Click Name</button>  */}
    <>
    {items.length?(
        <ItemList
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete} 
        />
        ) : (
            <p style={{marginTop:'2rem'}}>Your list is empty.</p>
        )}
    {/* </main> */}
    </>
    )
}

export default Content