import { useAuth } from "../../hooks";

const UserPage = () => {
  const { state, setState } = useAuth();
  const { name, email } = state.user;
  return (
    <div>
      <h2>Name: {name || ""}</h2>
      <h2>Email: {email || ""}</h2>
    </div>
  );
};

export default UserPage;
