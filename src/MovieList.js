import React, { Component } from 'react';
import Selectbox from './Elements/Selectbox';
import API_KEY from './API';


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
        { movielist.map(movie => (<h1 key={movie.id}>{ movie.title }</h1>))}
        <Selectbox
          items={[
            { value: 'movie/popular?', id: 1, text: 'Popular' },
            { value: 'movie/upcoming?', id: 2, text: 'Upcoming' },
            { value: 'movie/top_rated?', id: 3, text: 'Top Rated' },
            { value: 'movie/now_playing?', id: 4, text: 'Now Playing' },
          ]}
        />
      </div>
    );
  }
}
