import React from 'react';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Text from '../../components/Text';

const Home = () => {
  return (
    <Layout
      justify="flex-start"
      linear="gradient"
      color1="red500"
      color2="red200"
      barStyle="light-content"
      barColor="red500">
      <Title title="Olá Mundo" color="white" />
      <Card height="100" shadow="red400" />
      <Text
        text="Estou treinando como componentizar itens, react-native é sensacional!"
        color="white"
      />
      <Button text="Login" onPress={() => {}} color="red600" />
    </Layout>
  );
};

export default Home;
