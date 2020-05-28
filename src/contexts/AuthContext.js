import React, { useState, createContext, useContext, useEffect } from 'react';

import { useGlobal } from './GlobalContext';

import firebase from '../services/firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loading, setLoading } = useGlobal();

  const [signed, setSigned] = useState(false);

  // Verifica usuário ativo
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
  //

  return (
    <AuthContext.Provider value={{ signed, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { signed, loading } = context;

  return { signed, loading };
};

export default AuthProvider;
