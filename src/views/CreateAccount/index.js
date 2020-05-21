/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import firebase from '../../services/firebase';

import {
  Layout,
  Container,
  Text,
  Input,
  Button,
  ModalError,
} from '../../components';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('a@teste.com');
  const [password, setPassword] = useState('123123');
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState({ visible: false });

  const handleCreateAccount = () => {
    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.database().ref('users').child(res.user.uid).set({
          name,
        });

        setLoading(false);
        Keyboard.dismiss();
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          setDataModal({
            type: 'error',
            text: 'Preencha todos os campos!',
            visible: true,
          });
          setLoading(false);
          Keyboard.dismiss();
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
  };

  return (
    <Layout justify="center">
      <ModalError
        type={dataModal.type}
        text={dataModal.text}
        visible={dataModal.visible}
      />
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
