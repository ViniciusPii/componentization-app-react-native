import React from 'react';
import * as S from './styles';

const Button = ({color, text}) => {
  return (
    <S.Button color={color}>
      <S.TextButtom>{text}</S.TextButtom>
    </S.Button>
  );
};

export default Button;
