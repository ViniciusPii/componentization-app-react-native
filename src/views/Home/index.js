import React from 'react';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Input from '../../components/Input';

const Home = () => {
  return (
    <Layout justify="flex-start">
      <Title title="Seja Bem Vindo!" />
      <Card />
      <Text text="Esse app foi desenvolvido para treinar componentes em React e React-Native, o intuito é a sensação de brincar de lego e o ganho de produtividade, fazendo com que apenas faça a chamada do componente e por props você mesmo defina seus comportamentos" />
      <Input placeholder="Nome" />
      <Input placeholder="Sobrenome" />
      <Button text="Login" onPress={() => {}} />
      <Button type="link" text="Sair" onPress={() => {}} />
    </Layout>
  );
};

export default Home;
