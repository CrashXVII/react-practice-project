import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const POSTERPATH = 'https://image.tmdb.org/t/p/w92';

const MovieContainer = styled.div`
  display: grid;
  justify-items: center;

`;

const Movie = ({ title, overview, posterpath }) => (
  <MovieContainer>
    <img src={`${POSTERPATH}${posterpath}`} alt={title} />
    <h1>{ title }</h1>
    <p>{ overview }</p>
  </MovieContainer>
);

Movie.defaultProps = {
  title: 'Title',
  overview: 'Movie overview goes here.',
  posterpath: '',
};

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  posterpath: PropTypes.string,
};

export default Movie;
