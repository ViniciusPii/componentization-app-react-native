/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState, createContext } from 'react';

import { Keyboard } from 'react-native';
import firebase from '../services/firebase';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState({ visible: false });

  const createAccount = (name, email, password) => {
    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .database()
          .ref('users')
          .child(res.user.uid)
          .set({
            name,
          })
          .then(() => {
            const data = {
              uid: res.user.uid,
              name,
              email: res.user.email,
            };
            setUser(data);
          });
        setLoading(false);
        setDataModal({
          type: 'success',
          text: 'Cadastrado com sucesso!',
          visible: true,
        });

        Keyboard.dismiss();
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          alert('Preencha todos os campos');
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

  const login = (email, password) => {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .database()
          .ref('users')
          .child(res.user.uid)
          .once('value')
          .then((snap) => {
            const data = {
              uid: res.user.uid,
              name: snap.val(),
              email: res.user.email,
            };
            setUser(data);
            setLoading(false);
          });
      })
      .catch(() => {
        setLoading(false);
        setDataModal({
          text: 'Ah não! Usuário ou senha incorretos!',
          type: 'error',
          visible: true,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, dataModal, createAccount, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
