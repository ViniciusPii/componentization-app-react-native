import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <Layout justify="center">
      <Container>
        <Icon name="account-circle" size={75} mb={25} />
        <Input placeholder="Nome" />
        <Input placeholder="Senha" />
        <Button text="Logar" mt={20} onPress={() => {}} />
        <Button
          type="link"
          text="Crie sua conta!"
          textColor="neutral600"
          mt={10}
          onPress={handleLogin}
        />
      </Container>
    </Layout>
  );
};

export default Login;
