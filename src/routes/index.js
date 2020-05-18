import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import firebase from '../services/firebase';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Layout from '../components/Layout';

const Routes = () => {
  const [sign, setSign] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSign(true);
        setLoading(false);
      } else {
        setSign(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <Layout justify="center">
        <ActivityIndicator size="large" />
      </Layout>
    );
  }

  return !sign ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
