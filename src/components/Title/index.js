import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Title = ({...props}) => {
  return <S.Title {...props}>{props.title}</S.Title>;
};

Title.defaultProps = {
  textColor: 'neutral700',
  mt: 0,
  mb: 20,
  fs: 24,
};

Title.protoTypes = {
  title: PropTypes.string.isRequired,
  mt: PropTypes.number.isRequired,
  mb: PropTypes.number.isRequired,
};

export default Title;
