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
  ModalError,
} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('c@teste.com');
  const [password, setPassword] = useState('123123');
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState({ visible: false });

  const handleLogin = async () => {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Logado com sucesso');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setDataModal({
          type: 'error',
          text: 'Ah não usuário ou senha inválidos!',
          visible: true,
        });
      });
  };

  return (
    <Layout justify="center">
      <ModalError
        type={dataModal.type}
        text={dataModal.text}
        visible={dataModal.visible}
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
