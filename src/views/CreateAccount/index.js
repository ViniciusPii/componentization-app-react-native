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
  Alert,
} from '../../components';
import { useGlobal } from '../../contexts/GlobalContext';

const CreateAccount = () => {
  const { alertModal, setAlertModal, loading, setLoading } = useGlobal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.database().ref('users').child(res.user.uid).set({
          name,
        });
        setAlertModal({
          type: 'success',
          text: 'Cadastrado com sucesso!',
          visible: true,
        });
        setLoading(false);
        Keyboard.dismiss();
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          setAlertModal({
            type: 'warning',
            text: 'Preencha todos os campos!',
            visible: true,
          });

          setLoading(false);
          Keyboard.dismiss();
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            setAlertModal({
              type: 'error',
              text: 'Sua senha deve ter no minimo 6 caracteres!',
              visible: true,
            });
            break;

          case 'The email address is already in use by another account.':
            setAlertModal({
              type: 'error',
              text: 'Esse email já está sendo utilizado por outro usuário!',
              visible: true,
            });
            break;

          case 'The email address is badly formatted.':
            setAlertModal({
              type: 'error',
              text: 'O formato do email não é válido!',
              visible: true,
            });
            break;

          default:
            setAlertModal({
              type: 'error',
              text: 'Não foi possível cadastrar o Usuário',
              visible: true,
            });
            break;
        }
        setLoading(false);
        Keyboard.dismiss();
      });
  };

  return (
    <Layout justify="center">
      <Alert
        type={alertModal.type}
        text={alertModal.text}
        visible={alertModal.visible}
        handleVisible={() => setAlert({ visible: false })}
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
