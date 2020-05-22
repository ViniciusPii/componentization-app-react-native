/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebase';

import {
  Layout,
  Container,
  Icon,
  Input,
  Button,
  Alert,
} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const handleLogin = async () => {
    setLoading(true);

    if (email === '' || password === '') {
      setLoading(false);
      setAlert({
        type: 'warning',
        text: 'Preencha todos os campos!',
        visible: true,
      });
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setAlert({
          type: 'error',
          text: 'Ah não usuário ou senha inválidos!',
          visible: true,
        });
      });
  };

  return (
    <Layout justify="center">
      <Alert
        type={alert.type}
        text={alert.text}
        visible={alert.visible}
        handleVisible={() => setAlert({ visible: false })}
      />
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
