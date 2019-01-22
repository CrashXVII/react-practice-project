import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';


const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
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
