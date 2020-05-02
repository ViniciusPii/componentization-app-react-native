import React from 'react';

import * as S from './styles';

const Input = ({...props}) => {
  console.log(props.label);
  return (
    <S.InputContainer>
      {/* <S.Label labelColor={props.labelColor}>{props.label}</S.Label> */}
      <S.Input
        placeholder={props.placeholder}
        borderColor={props.borderColor}
        bgColor={props.bgColor}
        textColor={props.textColor}
      />
    </S.InputContainer>
  );
};

Input.defaultProps = {
  borderColor: 'ghost',
  bgColor: 'neutral300',
  labelColor: 'neutral500',
  textColor: 'neutral500',
};

export default Input;
