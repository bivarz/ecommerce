import React, { createContext, useState, useContext } from 'react';

const CloseContext = createContext();

// eslint-disable-next-line react/prop-types
export default function CloseProvider({ children }) {
  const [active, setActive] = useState(false);
  return (
    <CloseContext.Provider value={{ active, setActive }}>
      {children}
    </CloseContext.Provider>
  );
}
export function useClose() {
  const context = useContext(CloseContext);
  const { active, setActive } = context;
  return { active, setActive };
}
