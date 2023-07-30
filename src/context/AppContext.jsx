import { createContext, useState } from 'react';
import { login } from '../data';

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState(login);

  return (
    <GlobalContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
