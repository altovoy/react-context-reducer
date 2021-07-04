import { useState } from "react";
import { AuthContext } from "../context";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
