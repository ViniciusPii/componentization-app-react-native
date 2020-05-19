/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  const { createAccount, loading } = useContext(AuthContext);

  const [name, setName] = useState('Pii');
  const [email, setEmail] = useState('a@teste.com');
  const [password, setPassword] = useState('123123');

  const handleCreateAccount = () => {
    createAccount(name, email, password);
  };

  return (
    <Layout justify="center">
      <Container>
        <Text text="É rapidinho :)" />
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={(t) => setName(t)}
        />
        <Input
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(t) => setEmail(t)}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
        <Button
          text="Cadastrar"
          onPress={handleCreateAccount}
          mt={25}
          loading={loading}
        />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
