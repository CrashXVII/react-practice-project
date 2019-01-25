import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MovieList from './MovieList';


const App = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <div className="App">
      <MovieList />
    </div>
  </ThemeProvider>
);

export default App;
