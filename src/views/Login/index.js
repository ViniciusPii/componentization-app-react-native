import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Layout,
  Container,
  Icon,
  Input,
  Button,
  Alert,
} from '../../components';

import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const navigation = useNavigation();

  const { login, alertModal, loadingButton } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <Layout justify="center">
      <Alert {...alertModal} />
      <Container>
        <Icon name="account-circle" size={75} mb={25} />
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(t) => setEmail(t)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
        <Button
          text="Logar"
          mt={20}
          onPress={handleLogin}
          loading={loadingButton}
        />
        <Button
          type="link"
          text="Crie sua conta!"
          mt={5}
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </Container>
    </Layout>
  );
};

export default Login;
