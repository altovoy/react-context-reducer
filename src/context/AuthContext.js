import { createContext } from "react";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const AuthContext = createContext({
  state: initialState,
  dispatch: () => {},
});

export default AuthContext;
