import { useAuth } from "../../hooks";

function HomePage() {
  const { state, setState } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    setState((state) => {
      let { isAuthenticated } = state;
      isAuthenticated = !isAuthenticated;
      const user = isAuthenticated
        ? { name: "Dummy Name", email: "dummy@email.com" }
        : {};
      return {
        ...state,
        isAuthenticated,
        user,
      };
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
