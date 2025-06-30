// src/Pages/SellerDashboard.jsx

import { useAuth } from "../Authentication/Authentication";


export default function SellerDashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Seller Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout} style={{ padding: '10px' }}>Logout</button>
    </div>
  );
}
