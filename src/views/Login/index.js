import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Layout justify="center">
      <Title title="Login" />
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Button text="Login" mt="20" onPress={() => {}} />
    </Layout>
  );
};

export default Login;
