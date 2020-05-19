import React, { useContext } from 'react';
// import { ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
// import Layout from '../components/Layout';

const Routes = () => {
  const { signed } = useContext(AuthContext);

  // if (loading) {
  //   return (
  //     <Layout justify="center">
  //       <ActivityIndicator size="large" />
  //     </Layout>
  //   );
  // }

  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
