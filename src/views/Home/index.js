import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Layout>
      <Title title="Olá mundo!" mt="40" color="neutral900" />
      <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado." />
      <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos." />
      <Button text="Ok" onPress={() => {}} mt="10" />
    </Layout>
  );
};

export default Home;
