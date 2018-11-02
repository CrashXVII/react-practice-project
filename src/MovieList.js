import React, { Component } from 'react';


const APIConfig = {
  key: 'api_key=bc1fea1a843eab396d852f9f7d26a75e',
  base: 'https://api.themoviedb.org/3/',
  searchpaths: {
    popular: 'movie/popular?',
  },
};


export default class MovieList extends Component {
  state = {
    movielist: [],
  }

  async componentDidMount() {
    try {
      const { key, base, searchpaths } = APIConfig;
      const response = await fetch(`${base}${searchpaths.popular}${key}`);
      const data = await response.json();
      const movielist = await data.results;
      this.setState({
        movielist,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    const { movielist } = this.state;
    return (
      <div>
        { movielist.map(movie => (<h1>{movie.title}</h1>))}
      </div>
    );
  }
}
