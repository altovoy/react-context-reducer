import { AuthContext } from "../context";
import { authReducer } from "../reducers";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = authReducer();

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
