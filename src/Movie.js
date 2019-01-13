import React from 'react';
import PropTypes from 'prop-types';

const POSTERPATH = 'https://image.tmdb.org/t/p/w92';

const Movie = ({ title, overview, posterpath }) => (
  <div>
    <img src={`${POSTERPATH}${posterpath}`} alt={title} />
    <h1>{ title }</h1>
    <p>{ overview }</p>
  </div>
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
