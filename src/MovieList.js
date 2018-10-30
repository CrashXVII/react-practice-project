import React, { Component } from 'react';


const APIKey = 'api_key=bc1fea1a843eab396d852f9f7d26a75e';
const popularSearchPath = 'https://api.themoviedb.org/3/movie/popular?';

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movielist: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${popularSearchPath}${APIKey}`);
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
