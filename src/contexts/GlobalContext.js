import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alertModal, setAlertModal] = useState({});

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, alertModal, setAlertModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  const { loading, setLoading, alertModal, setAlertModal } = context;
  return { loading, setLoading, alertModal, setAlertModal };
};

export default GlobalProvider;
