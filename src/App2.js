import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    const name = "Harsh";
    console.log(name);  
    const handleNameChange = () => {
        const names = ['Gurpreet','Harshdeep','Chintu'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
               
        return (
            <div className="App2">
            <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" /> 
        
        <p>
          Edit <code>src/App.js</code> and save to see what I change.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New project
        </a>

        <p>HTML</p> */}
        <p>{"Harsh"}</p>
        <p>{[1,2,3]}</p> javascript expression
        <p>{{a:1,b:2}}</p> objects also won't render
        <p>{true === false}</p> boolean won't render
        <p>{undefined}</p> undefined won't render
        <p>{null}</p> null won't render
        <p>{() => {}}</p> functions won't render
        <p>{name}</p> variable
        <p>{name.toUpperCase()}</p> functions
        <p>{name.length}</p> property
        <p>{name + " " + name}</p> string concatenation
        <p>{`${name} ${name}`}</p> string interpolation
        <p>{name === "Harsh" ? "Yes" : "No"}</p> ternary operator
        <p>{name === "Harsh" && "Yes"}</p> logical AND
        <p>{name === "Harsh" || "Yes"}</p> logical OR
        <p>{!name}</p> logical NOT
        <p>{name || "Yes"}</p> logical OR
        <p>{name && "Yes"}</p> logical AND
        <p>{name.length > 0 && "Yes"}</p> logical AND
        <p>{name.length > 0 || "Yes"}</p> logical OR
        <p>{name.length > 0 ? "Yes" : "No"}</p> ternary operator
        <p>{name.length > 0 && "Yes"}</p> logical AND
        <p>{name.length > 0 || "Yes"}</p> logical OR
        <p>{name.length > 0 ? "Yes" : "No"}</p> ternary operator
        <p>{name.length > 0 && "Yes"}</p> logical AND
        <p>{name.length > 0 || "Yes"}</p> logical OR
        <p>{name.length > 0 ? "Yes" : "No"}</p> ternary operator
        <p>{name.length > 0 && "Yes"}</p> logical AND
        <p>{name.length > 0 || "Yes"}</p> logical OR
        <p>{name.length > 0 ? "Yes" : "No"}</p> ternary operator
        <p>{name.length > 0 && "Yes"}</p> logical AND

        <p>
          Hello {handleNameChange()}!
        </p>

        </header>
        </div>
    );
  }
  
export default App;