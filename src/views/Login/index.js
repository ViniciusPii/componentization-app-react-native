/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

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
  const { login, loading, dataModal } = useContext(AuthContext);
  const { type, text, visible } = dataModal;
  const [email, setEmail] = useState('b@teste.com');
  const [password, setPassword] = useState('123123');
  // const [teste, setTeste] = useState(true);

  const handleLogin = async () => {
    login(email, password);

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  return (
    <Layout justify="center">
      <Container>
        <ModalError type={type} text={text} visible={visible} />
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
