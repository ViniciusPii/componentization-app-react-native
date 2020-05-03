import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Card = ({...props}) => {
  return (
    <S.Card
      elevation={10}
      width={props.width}
      height={props.height}
      mt={props.mt}
      mb={props.mb}
      bgColor={props.bgColor}
      shadow={props.shadow}
    />
  );
};

Card.defaultProps = {
  bgColor: 'white',
  shadow: 'gray300',
  width: '90',
  height: '100',
  mt: 0,
  mb: 20,
};

Card.propType = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Card;
