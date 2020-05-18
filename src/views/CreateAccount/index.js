/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState } from 'react';

import { Keyboard } from 'react-native';
import firebase from '../../services/firebase';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateAccount = async () => {
    setLoading(true);

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        alert(`Cadastrado com sucesso o email ${res.user.email}`);
        setLoading(false);
        Keyboard.dismiss();
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          alert('Preencha todos os campos');
          setLoading(false);
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            alert('Sua senha deve ter no minimo 6 caracteres!');
            break;

          case 'The email address is already in use by another account.':
            alert('Esse email já está sendo utilizado por outro usuário!');
            break;

          case 'The email address is badly formatted.':
            alert('O formato do email não é válido!');
            break;

          default:
            alert('Não foi possível cadastrar o Usuário');
            break;
        }
        setLoading(false);
        Keyboard.dismiss();
      });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Layout justify="center">
      <Container>
        <Text text="É rapidinho :)" />
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={(t) => setName(t)}
        />
        <Input
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(t) => setEmail(t)}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
        <Button
          text="Cadastrar"
          onPress={handleCreateAccount}
          mt={25}
          loading={loading}
        />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
