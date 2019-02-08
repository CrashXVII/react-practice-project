import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  place-items: center;
`;


const Loading = ({ type, color }) => (
  <Div>
    <ReactLoading type={type} color={color} height={667} width={375} />
  </Div>
);


Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  type: 'cylon',
  color: '#333',
};
export default Loading;
