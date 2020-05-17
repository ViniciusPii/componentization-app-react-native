import React from 'react';

import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/Container';

const Login = () => {
  return (
    <Layout
      justify="center"
      bgColor="celeste950"
      barColor="celeste950"
      barStyle="light-content"
    >
      <Container>
        <Icon name="account-circle" size={75} color="orange500" mb={25} />
        <Input placeholder="Nome" placeholderTextColor="orange300" />
        <Input placeholder="Senha" placeholderTextColor="orange300" />
        <Button
          text="Logar"
          bgColor="orange500"
          textColor="celeste900"
          mt={20}
          onPress={() => {}}
        />
      </Container>
    </Layout>
  );
};

export default Login;
