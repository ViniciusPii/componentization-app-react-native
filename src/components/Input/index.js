import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ ...props }) => {
  return <S.Input {...props} />;
};

Input.defaultProps = {
  borderColor: 'border',
  bgColor: 'bgColor',
  textColor: 'textColor',
  placeholderTextColor: 'placeholderTextColor',
  mt: 0,
  mb: 15,
  w: '100%',
  h: 55,
};

Input.propTypes = {
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  w: PropTypes.string,
  h: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
