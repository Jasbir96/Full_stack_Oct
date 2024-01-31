import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from "./Components/Counter";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
