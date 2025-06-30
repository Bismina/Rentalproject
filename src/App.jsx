import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { AuthProvider, useAuth } from './Authentication/Authentication';
import UserLogin from './Pages/UserLogin';
import SellerRegister from './Pages/SellerRegister';
import SellerDashboard from './Pages/SellerDashboard';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/seller/*" element={<ProtectedSellerRoute />} />
      </Routes>
    </AuthProvider>
  );
}

function ProtectedSellerRoute() {
  const { user } = useAuth();

  if (!user) {
    // Not logged in ➔ Show Seller Register/Login page
    return <SellerRegister />;
  }

  if (user.role !== 'seller') {
    // Logged in but not seller ➔ Redirect to home or show unauthorized
    return <Navigate to="/" />;
  }

  // Seller logged in ➔ Show Seller Dashboard
  return <SellerDashboard />;
}

export default App;
