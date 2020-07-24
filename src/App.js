import React from 'react';
import logo from './logo.svg';
import Boton from './Boton'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CITT <code>2021</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSX
        </a>
        <Boton/>
      </header>
    </div>
  );
}

export default App;
