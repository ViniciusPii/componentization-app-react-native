import React from 'react';

import Title from '../../components/Title';
import Buttom from '../../components/Buttom';
import Text from '../../components/Text';
import Section from '../../components/Section';
import Card from '../../components/Card';

const Home = () => (
  <Section justify="flex-start">
    <Title title="Titulo Qualquer" />
    <Card />
    <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos." />
    <Buttom text="Login" />
  </Section>
);

export default Home;
