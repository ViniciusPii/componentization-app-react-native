import React from 'react';
import {StatusBar} from 'react-native';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Layout justify="flex-start" linear="gradient">
      <StatusBar barStyle="light-content" />
      <Title title="Olá Mundo" />
      <Button text="Cadastrar" onPress={() => {}} />
      <Button text="Cadastrar" onPress={() => {}} />
    </Layout>
  );
};

export default Home;
