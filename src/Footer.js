import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #000;
  color: #aaa;
  width: 100%;
  height: 50px;
`;

const Footer = () => (
  <StyledFooter>
    <p>John Barhorst</p>
  </StyledFooter>
);


export default Footer;
