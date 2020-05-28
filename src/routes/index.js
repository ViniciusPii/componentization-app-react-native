import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../contexts/AuthContext';

import { Preload } from '../components';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Preload />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
