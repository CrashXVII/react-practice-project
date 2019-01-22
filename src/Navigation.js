import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: inline - block;
  color: #222;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #222;
  border-radius: 3px;
  display: block;
`;

const Nav = styled.nav`
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  justify-content: space-around;
  display: flex;
  margin: 0;
`;

const Navigation = ({ handleSearchSelect }) => (
  <div>
    <Nav>
      <Ul>
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
          <Button onClick={handleSearchSelect} value="movie/popular?">
            Popular Titles
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

Navigation.defaultProps = {
  handleSearchSelect: () => {},
};

Navigation.propTypes = {
  handleSearchSelect: PropTypes.func,
};

export default Navigation;
