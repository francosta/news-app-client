import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Board from './components/Board';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the News App!</h1>
      <Board />
    </div>
  );
}

export default App;
