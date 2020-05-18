/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebase';

import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogin = async () => {
    setLoading(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Deu certo');
        setEmail('');
        setPassword('');
        setLoading(false);
      })
      .catch(() => {
        alert('Ah não! Usuário ou Senha incorretos');
        setEmail('');
        setPassword('');
        setLoading(false);
      });
  };

  return (
    <Layout justify="center">
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
        <Button text="Logar" mt={20} onPress={handleLogin} loading={loading} />
        <Button
          type="link"
          text="Crie sua conta!"
          textColor="neutral600"
          mt={5}
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </Container>
    </Layout>
  );
};

export default Login;
