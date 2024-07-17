import React, { createContext, useContext } from "react";

const ApiKeyContext = createContext();

export const useApiKeyContext = () => {
  return useContext(ApiKeyContext);
};

export const ApiKeyProvider = ({ children }) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";

  return (
    <ApiKeyContext.Provider
      value={{
        Api_key,
      }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};
