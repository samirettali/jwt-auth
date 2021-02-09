import { createContext } from 'react';

type UserContextType = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const ctx = {
  logged: false,
  setLogged: () => {},
};

export const UserContext = createContext<UserContextType>(ctx);
