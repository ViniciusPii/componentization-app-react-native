import React, {useState} from 'react';

import Title from '../../components/Title';
import Buttom from '../../components/Buttom';
import Text from '../../components/Text';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Input from '../../components/Input';

const Home = () => {
  const [name, setName] = useState();
  const [bkpName, setBkpName] = useState();
  const [lastName, setLastName] = useState();
  const [bkpLastName, setBkpLastName] = useState();

  const alertInfo = () => {
    setBkpName(name);
    setBkpLastName(lastName);
  };

  return (
    <Section justify="flex-start">
      <Title title="Titulo Qualquer" />
      <Card name={bkpName} lastName={bkpLastName} />
      <Input placeholder="Nome" value={name} onChangeText={(t) => setName(t)} />
      <Input
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={(t) => setLastName(t)}
      />
      <Text text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos." />
      <Buttom text="Login" onPress={alertInfo} />
    </Section>
  );
};

export default Home;
