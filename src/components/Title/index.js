import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Title = ({...props}) => {
  return (
    <S.Title color={props.color} mt={props.mt} mb={props.mb}>
      {props.title}
    </S.Title>
  );
};

Title.defaultProps = {
  color: 'neutral700',
  mt: 0,
  mb: 20,
};

Title.protoTypes = {
  title: PropTypes.string.isRequired,
  mt: PropTypes.number.isRequired,
  mb: PropTypes.number.isRequired,
};

export default Title;
