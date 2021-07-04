import { AuthProvider } from "./providers";
import HomePage from "./pages/Home/Home";
import UserPage from "./pages/User/User";
function App() {
  return (
    <AuthProvider>
      <HomePage />
      <UserPage />
    </AuthProvider>
  );
}

export default App;
