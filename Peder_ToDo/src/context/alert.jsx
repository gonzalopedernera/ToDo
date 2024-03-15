import { createContext, useState, useContext } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});

  const showAlert = (alertId) => {
    setAlert(prevState => ({
      ...prevState,
      [alertId]: true
    }));
  };

  const hideAlert = (alertId) => {
    setTimeout(() => {
      setAlert(prevState => ({
        ...prevState,
        [alertId]: false
      }));
    }, 3000);
  };

  const isAlertOpen = (alertId) => {
    return alert[alertId] || false;
  }

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, isAlertOpen }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);