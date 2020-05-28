import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../contexts/AuthContext';

import { Layout, Loading } from '../components';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <Layout justify="center">
        <Loading loading={loading} />
      </Layout>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
