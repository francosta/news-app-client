import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Board from './components/Board';
import getHeadlines from './api/news-api';

const App = () => {
  const [news, setNews] = useState();

  const getNews = () => {
    getHeadlines().then(resp => setNews(resp));
  };

  getNews();

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the News App!</h1>
      <Board news={news} />
    </div>
  );
};

export default App;
