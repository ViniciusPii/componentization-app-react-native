import React, { useEffect, useState } from 'react';

import firebase from '../../services/firebase';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Text from '../../components/Text';

const Home = () => {
  const user = firebase.auth().currentUser;

  const handleLogOff = () => {
    firebase.auth().signOut();
  };

  return (
    <Layout justify="center">
      <Text text={user.email} />
      <Button text="Deslogar" onPress={handleLogOff} />
    </Layout>
  );
};

export default Home;
