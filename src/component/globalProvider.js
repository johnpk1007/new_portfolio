import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [otherHover, setOtherHover] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        otherHover,
        setOtherHover,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
