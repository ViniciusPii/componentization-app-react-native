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
  const {
    alertModal,
    setAlertModal,
    loadingButton,
    setLoadingButton,
  } = useGlobal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    setLoadingButton(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.database().ref('users').child(res.user.uid).set({
          name,
        });
        setAlertModal({
          type: 'success',
          body: 'Cadastrado com sucesso!',
          visible: true,
        });
        setLoadingButton(false);
        Keyboard.dismiss();
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          setAlertModal({
            type: 'warning',
            body: 'Preencha todos os campos!',
            visible: true,
          });

          setLoadingButton(false);
          Keyboard.dismiss();
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            setAlertModal({
              type: 'error',
              body: 'Sua senha deve ter no minimo 6 caracteres!',
              visible: true,
            });
            break;

          case 'The email address is already in use by another account.':
            setAlertModal({
              type: 'error',
              body: 'Esse email já está sendo utilizado por outro usuário!',
              visible: true,
            });
            break;

          case 'The email address is badly formatted.':
            setAlertModal({
              type: 'error',
              body: 'O formato do email não é válido!',
              visible: true,
            });
            break;

          default:
            setAlertModal({
              type: 'error',
              body: 'Não foi possível cadastrar o Usuário',
              visible: true,
            });
            break;
        }
        setLoadingButton(false);
        Keyboard.dismiss();
      });
  };

  return (
    <Layout justify="center">
      <Alert
        type={alertModal.type}
        body={alertModal.body}
        visible={alertModal.visible}
        handleVisible={() => setAlertModal({ visible: false })}
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
          loading={loadingButton}
        />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
