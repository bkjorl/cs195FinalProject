import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Journal from './components/Journal.jsx';
import LoginSignup from './components/LoginSignup.jsx';

function AppContent() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div>
        <button onClick={logout} style={{ /* styles */ }}>Logout</button>
        <Journal />
      </div>
    );
  }

  return <LoginSignup />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;