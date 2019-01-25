import React, { Component } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import API_KEY from './API';
import Movie from './Movie';
import MovieDisplayButtons from './MovieDisplayButtons';
import Loading from './Loading';
import Footer from './Footer';

const backgroundColor = theme('mode', {
  dark: '#000',
});

const MovieWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  max-width: 90%;
  background-color: ${backgroundColor};
`;

const Div = styled.div`
  background-color: #000;
`;

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movielist: [],
      key: API_KEY,
      base: 'https://api.themoviedb.org/3/',
      searchpath: 'trending/movie/day?',
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
      <Div>
        <MovieDisplayButtons handleSearchSelect={this.handleSearchSelect} />
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
            <Loading type="spinningBubbles" color="#333" />
          )}
        </MovieWrapper>
        <Footer />
      </Div>
    );
  }
}
