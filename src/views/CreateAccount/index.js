import React from 'react';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  return (
    <Layout justify="center">
      <Container>
        <Text text="É rapidinho :)" />
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Cadastrar" onPress={() => {}} mt={25} />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
