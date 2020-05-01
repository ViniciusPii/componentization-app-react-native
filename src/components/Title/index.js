import React from 'react';
import * as S from './styles';

const Title = ({title, color}) => {
  return (
    <>
      <S.Title color={color}>{title}</S.Title>
    </>
  );
};

export default Title;
