import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import MovieList from './MovieList';


const App = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <div className="App">
      <MovieList />
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default App;
