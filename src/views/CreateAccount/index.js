import React, { useState } from 'react';

import {
  Layout,
  Container,
  Text,
  Input,
  Button,
  Alert,
} from '../../components';

import { useAuth } from '../../contexts/AuthContext';

const CreateAccount = () => {
  const { loadingButton, createAccount, alertModal } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createAccount(email, password, name);
  };

  return (
    <Layout justify="center">
      <Alert {...alertModal} />
      <Container>
        <Text text="É rapidinho :)" fs={28} />
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
          loading={loadingButton}
        />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
