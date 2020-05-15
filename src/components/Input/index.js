import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Input = ({...props}) => {
  return <S.Input {...props} />;
};

Input.defaultProps = {
  borderColor: 'ghost',
  bgColor: 'placeholderNeutral',
  textColor: 'neutral700',
  placeholderTextColor: 'neutral500',
  mt: 0,
  mb: 15,
  w: 100,
  h: 55,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
