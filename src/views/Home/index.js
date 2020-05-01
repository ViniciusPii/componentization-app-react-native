import React from 'react';

import Title from '../../components/Title';
import Button from '../../components/Buttom';
import Text from '../../components/Text';
import Section from '../../components/Section';
import Card from '../../components/Card';

const Home = () => {
  return (
    <>
      <Section orientation={'space-around'}>
        <Title title="Titulo Qualquer" color="red" />
        <Card />
        <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos." />
        <Button text="Login" />
      </Section>
    </>
  );
};

export default Home;
