import React from 'react';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const Login = () => {
  return (
    <Layout
      justify="center"
      bgColor="neutral900"
      barStyle="light-content"
      barColor="neutral900">
      <Icon name="account-circle" size={70} color="aquaGreen" mb="25" />
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button
        bgColor="aquaGreen"
        textColor="neutral900"
        mt="30"
        onPress={() => {}}
        text="Logar"
      />
      <Button
        type="link"
        text="Crie sua conta Já!"
        onPress={() => {}}
        textColor="white"
      />
    </Layout>
  );
};

export default Login;
