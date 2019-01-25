import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const POSTERPATH = 'https://image.tmdb.org/t/p/w92';

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
  color: #bbb;
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
`;

const StyledDiv = styled.div`

  h3 {
    margin-top: 0;
  }
`;

const Movie = ({ title, overview, posterpath }) => (
  <MovieContainer>
    <img src={`${POSTERPATH}${posterpath}`} alt={title} />
    <StyledDiv>
      <h3>{title}</h3>
      <p>{overview}</p>
    </StyledDiv>
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
