import React from 'react';
import * as S from './styles';
import Title from '../../components/Title';
import Button from '../../components/Buttom';

const Home = () => {
  return (
    <>
      <Title title="Titulo Qualquer" color="red" />
      <S.Input placeholder="Nome" />
      <S.Input placeholder="E-mail" />
      <S.Input placeholder="Senha" />
      <Button text="Login" color="green500" />
    </>
  );
};

export default Home;
