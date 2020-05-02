import React from 'react';

import * as S from './styles';

const Input = ({...props}) => {
  console.log(props.label);
  return (
    <S.Input
      placeholder={props.placeholder}
      borderColor={props.borderColor}
      bgColor={props.bgColor}
      textColor={props.textColor}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

Input.defaultProps = {
  borderColor: 'ghost',
  bgColor: 'neutral300',
  labelColor: 'neutral500',
  textColor: 'neutral800',
};

export default Input;
