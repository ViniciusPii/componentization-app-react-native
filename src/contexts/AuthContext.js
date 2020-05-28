import React, { useState, createContext, useContext, useEffect } from 'react';

import { Keyboard } from 'react-native';
import { useGlobal } from './GlobalContext';

import firebase from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {
    loading,
    setLoading,
    loadingButton,
    setLoadingButton,
    alertModal,
    setAlertModal,
  } = useGlobal();

  const [signed, setSigned] = useState(false);

  // Verifica usuário ativo
  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      setSigned(!!user);
      setLoading(false);
    });
  }, []);
  //

  // Cria um usuário
  const createAccount = (email, password, name) => {
    setLoadingButton(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.database().ref('users').child(res.user.uid).set({
          name,
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
  //

  // Loga um usuário
  const login = (email, password) => {
    setLoadingButton(true);

    if (email === '' || password === '') {
      setLoadingButton(false);
      setAlertModal({
        type: 'warning',
        body: 'Preencha todos os campos!',
        visible: true,
      });
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoadingButton(false);
      })
      .catch(() => {
        setAlertModal({
          type: 'error',
          body: 'Ah não usuário ou senha inválidos!',
          visible: true,
        });
        setLoadingButton(false);
      });
  };
  //

  return (
    <AuthContext.Provider
      value={{
        signed,
        loading,
        loadingButton,
        alertModal,
        createAccount,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {
    signed,
    loading,
    loadingButton,
    alertModal,
    createAccount,
    login,
  } = context;

  return { signed, loading, loadingButton, alertModal, createAccount, login };
};

export default AuthProvider;
