import React, { Component } from 'react';
import API_KEY from './API';
import Movie from './Movie';
import Navigation from './Navigation';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movielist: [],
      key: API_KEY,
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
        <Navigation clickHander={this.handleSearchSelect} />
        {movielist.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterpath={movie.poster_path}
          />
        ))}
      </div>
    );
  }
}
