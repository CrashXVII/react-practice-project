import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import API_KEY from './API';
import Movie from './Movie';
import MovieDisplayButtons from './MovieDisplayButtons';
import Loading from './Loading';
import Footer from './Footer';

const backgroundColor = theme('mode', {
  dark: '#000',
});

const size = {
  small: 400,
  med: 960,
  large: 1140,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const MovieWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  max-width: 90%;
  background-color: ${backgroundColor};
  ${above.large`
    grid-template-columns: repeat(2, 1fr);
  `}
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
      this.setState({ isLoading: false });
      throw new Error(e);
    }
  }

  render() {
    const { movielist, isLoading } = this.state;
    return (
      <Div>
        <MovieDisplayButtons handleSearchSelect={this.handleSearchSelect} />

        {!isLoading ? (
          <MovieWrapper>
            {movielist.map(movie => (
              <Movie
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterpath={movie.poster_path}
              />
            ))}
          </MovieWrapper>
        ) : (
          <Loading type="spinningBubbles" color="#333" />
        )}
        <Footer />
      </Div>
    );
  }
}
