import React from 'react';
import * as S from './styles';

const Card = ({name, lastName}) => {
  return (
    <S.Card elevation={10}>
      <S.Title>Nome: {name}</S.Title>
      <S.Text>Sobrenome: {lastName}</S.Text>
    </S.Card>
  );
};

export default Card;
