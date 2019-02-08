import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const size = {
  small: 635,
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

const Button = styled.button`
  display: inline - block;
  color: #bbb;
  background-color: #333;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid #222;
  border-radius: 3px;
  display: block;
  &:hover {
    border: 2px solid rgb(41, 156, 223);
  }
  ${above.small`
    margin: 1em;
  `}
`;

const Nav = styled.nav`
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  ${above.small`
    display: flex;
    justify-content: space-around;
  `}
`;

const MovieDisplayButtons = ({ handleSearchSelect }) => (
  <div>
    <Nav>
      <Ul>
        <li>
          <Button onClick={handleSearchSelect} value="trending/movie/day?">
            Trending Now
          </Button>
        </li>
        <li>
          <Button onClick={handleSearchSelect} value="movie/popular?">
            Popular Titles
          </Button>
        </li>
        <li>
          <Button onClick={handleSearchSelect} value="movie/now_playing?">
            Now Playing
          </Button>
        </li>
        <li>
          <Button onClick={handleSearchSelect} value="movie/upcoming?">
            Upcoming Releases
          </Button>
        </li>
        <li>
          <Button onClick={handleSearchSelect} value="movie/top_rated?">
            Top Rated
          </Button>
        </li>
      </Ul>
    </Nav>
  </div>
);

MovieDisplayButtons.defaultProps = {
  handleSearchSelect: () => {},
};

MovieDisplayButtons.propTypes = {
  handleSearchSelect: PropTypes.func,
};

export default MovieDisplayButtons;
