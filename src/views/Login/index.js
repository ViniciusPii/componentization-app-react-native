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
import { useGlobal } from '../../contexts/GlobalContext';

const Login = () => {
  const navigation = useNavigation();

  const {
    alertModal,
    setAlertModal,
    loadingButton,
    setLoadingButton,
  } = useGlobal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // setAlertModal({
    //   type: 'success',
    //   body: 'Cadastre suas credenciais',
    //   visible: true,
    // });

    setLoadingButton(true);

    if (email === '' || password === '') {
      setLoadingButton(false);
      setAlertModal({
        type: 'warning',
        body: 'Preencha todos os campos!',
        visible: true,
      });
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoadingButton(false);
      })
      .catch(() => {
        setLoadingButton(false);
        setAlertModal({
          type: 'error',
          body: 'Ah não usuário ou senha inválidos!',
          visible: true,
        });
      });
  };

  return (
    <Layout justify="center">
      <Alert
        type={alertModal.type}
        body={alertModal.body}
        visible={alertModal.visible}
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
        <Button
          text="Logar"
          mt={20}
          onPress={handleLogin}
          loading={loadingButton}
        />
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
