import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Layout justify="flex-start">
      <Title title="Olá mundo!" mt="40" />
      <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado." />
      <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos." />
      <Button
        text="Ok"
        onPress={() => {
          alert('Ok');
        }}
        mt="10"
      />
    </Layout>
  );
};

export default Home;
