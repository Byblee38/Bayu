import logo from './logo.svg';
import './App.css';
import Hobby from './Komponen/Hobby';
import React from 'react';
import Biodata from './Komponen/Biodata';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Halo Guys!</h1>
        <p>
          Welcome To My Website
        </p>
        <Biodata />
        <Hobby />
      </header>
    </div>
  );
}

export default App;
