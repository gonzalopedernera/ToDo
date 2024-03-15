import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({});

  const openModal = (modalId) => {
    setModalState(prevState => ({
      ...prevState,
      [modalId]: true
    }));
  };

  const closeModal = (modalId) => {
    setModalState(prevState => ({
      ...prevState,
      [modalId]: false
    }));
    console.log(modalState[modalId])
  };

  const isModalOpen = (modalId) => {
    return modalState[modalId] || false;
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);