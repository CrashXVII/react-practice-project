import React, { Component } from 'react';
import styled from 'styled-components';
import API_KEY from './API';
import Movie from './Movie';

const Button = styled.button`
  display: inline - block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Nav = styled.nav`
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
    this.setState({ isLoading: true, searchpath: e.target.value }, () => this.getMovies());
  }

  getMovies = async () => {
    try {
      const { key, base, searchpath } = this.state;
      const response = await fetch(`${base}${searchpath}${key}`);
      const data = await response.json();
      const movielist = await data.results;
      this.setState({ isLoading: false, movielist });
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    const { movielist, isLoading } = this.state;
    return (
      <div>
        <Nav>
          <Ul>
            <li>
              <Button onClick={this.handleSearchSelect} value="movie/now_playing?">
                Now Playing
              </Button>
            </li>
            <li>
              <Button onClick={this.handleSearchSelect} value="movie/upcoming?">
                Upcoming Releases
              </Button>
            </li>
            <li>
              <Button onClick={this.handleSearchSelect} value="movie/popular?">
                Popular Titles
              </Button>
            </li>
            <li>
              <Button onClick={this.handleSearchSelect} value="movie/top_rated?">
                Top Rated
              </Button>
            </li>
          </Ul>
        </Nav>
        <MovieWrapper>
          {!isLoading ? (
            movielist.map(movie => (
              <Movie
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterpath={movie.poster_path}
              />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </MovieWrapper>
      </div>
    );
  }
}
