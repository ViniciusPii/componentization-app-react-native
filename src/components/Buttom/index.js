import React from 'react';
import * as S from './styles';

const Button = ({text}) => {
  return (
    <>
      <S.Button>
        <S.TextButtom>{text}</S.TextButtom>
      </S.Button>
    </>
  );
};

export default Button;
