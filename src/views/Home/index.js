import React from 'react';

import firebase from '../../services/firebase';

import { Layout, Text, Button } from '../../components';

const Home = () => {
  const handleLogOff = () => {
    firebase.auth().signOut();
  };

  return (
    <Layout>
      <Text text="Olá" bold={700} fs={28} mt={60} />
      <Text
        text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado."
        align="left"
      />
      <Button text="Deslogar" onPress={handleLogOff} mt={30} />
    </Layout>
  );
};

export default Home;
