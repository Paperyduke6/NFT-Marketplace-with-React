import React, { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletImages, setWalletImages] = useState([]);

  const addToWallet = (image) => {
    setWalletImages((prevImages) => [...prevImages, image]);
  };

  return (
    <WalletContext.Provider value={{ walletImages, addToWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
