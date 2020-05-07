import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Input = ({...props}) => {
  console.log(props.label);
  return (
    <S.Input
      placeholder={props.placeholder}
      borderColor={props.borderColor}
      bgColor={props.bgColor}
      textColor={props.textColor}
      placeholderTextColor={props.placeholderTextColor}
      value={props.value}
      onChangeText={props.onChangeText}
      mt={props.mt}
      mb={props.mb}
    />
  );
};

Input.defaultProps = {
  borderColor: 'ghost',
  bgColor: 'placeholderNeutral',
  textColor: 'neutral700',
  placeholderTextColor: 'neutral500',
  mt: 0,
  mb: 15,
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
