import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movielist: [],
      key: 'api_key=bc1fea1a843eab396d852f9f7d26a75e',
      base: 'https://api.themoviedb.org/3/',
      searchpath: 'movie/popular?',
    };
  }

  async componentDidMount() {
    try {
      this.getMovies();
    } catch (e) {
      throw new Error(e);
    }
  }

  handleSearchSelect = (e) => {
    this.setState({
      searchpath: e.target.value,
    });
    this.getMovies();
  }

  getMovies = async () => {
    const { key, base, searchpath } = this.state;
    const response = await fetch(`${base}${searchpath}${key}`);
    const data = await response.json();
    const movielist = await data.results;
    this.setState({
      movielist,
    });
  }

  render() {
    const { movielist } = this.state;
    return (
      <div>
        { movielist.map(movie => (<h1 key={movie.id}>{ movie.title }</h1>))}
        <select name="search-select" id="search-select" onChange={this.handleSearchSelect}>
          <option value="movie/popular?">Popular</option>
          <option value="movie/upcoming?">Upcoming</option>
          <option value="movie/top_rated?">Top Rated</option>
          <option value="movie/now_playing?">Now Playing</option>
        </select>
      </div>
    );
  }
}
