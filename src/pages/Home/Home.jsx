import { useAuth } from "../../hooks";
import ACTIONS from "../../actions";

function HomePage() {
  const { state, dispatch } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    let { isAuthenticated } = state;
    isAuthenticated = !isAuthenticated;
    const user = isAuthenticated
      ? { name: "Dummy Name", email: "dummy@email.com" }
      : {};
    dispatch({
      type: ACTIONS.SET_USER,
      payload: user,
    });
    dispatch({
      type: ACTIONS.SET_AUTHENTICATED,
      payload: isAuthenticated,
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogin}>
        {state.isAuthenticated ? "Logout" : "Login"}
      </button>
      <h1>{state.isAuthenticated ? "Authenticated" : "Not Authenticated"}</h1>
    </div>
  );
}

export default HomePage;
