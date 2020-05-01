import React from 'react';
import * as S from './styles';

const Button = ({text, color}) => {
  return (
    <>
      <S.Button color={color}>
        <S.TextButtom>{text}</S.TextButtom>
      </S.Button>
    </>
  );
};

export default Button;
