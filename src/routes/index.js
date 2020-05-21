import React, { useEffect, useState } from 'react';

import firebase from '../services/firebase';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { Layout, Loading } from '../components';

const Routes = () => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSigned(true);
        setLoading(false);
      } else {
        setSigned(false);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <Layout justify="center">
        <Loading loadingColor="neutral" loading={loading} />
      </Layout>
    );
  }

  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
