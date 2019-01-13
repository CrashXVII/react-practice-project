import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Navigation = ({ clickHandler }) => (
  <div>
    <Nav>
      <Ul>
        <li>
          <Button onClick={clickHandler}>Latest Movies</Button>
        </li>
        <li>
          <Button onClick={clickHandler}>Now Playing</Button>
        </li>
        <li>
          <Button onClick={clickHandler}>Upcoming Releases</Button>
        </li>
        <li>
          <Button onClick={clickHandler}>Popular Titles</Button>
        </li>
        <li>
          <Button onClick={clickHandler}>Top Rated</Button>
        </li>
      </Ul>
    </Nav>
  </div>
);

Navigation.defaultProps = {
  clickHandler: () => {},
};

Navigation.propTypes = {
  clickHandler: PropTypes.func,
};

export default Navigation;
