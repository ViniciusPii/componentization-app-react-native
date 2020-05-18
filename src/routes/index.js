import React, { useEffect, useState } from 'react';

import firebase from '../services/firebase';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const [sign, setSign] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSign(true);
      } else {
        setSign(false);
      }
    });
  }, []);

  return !sign ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
