// refatorar

import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ ...props }) => {
  return <S.Card {...props} />;
};

Card.defaultProps = {
  bgColor: 'white',
  shadow: 'gray300',
  w: '100%',
  h: 100,
  mt: 0,
  mb: 20,
};

Card.propType = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Card;
