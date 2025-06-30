// src/Pages/SellerRegister.jsx
import { useState } from 'react';
import { useAuth } from '../Authentication/Authentication';

export default function SellerRegister() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Dummy registration/login logic. Replace with real API later.
    if (email && password) {
      const userData = {
        name: 'Demo Seller',
        role: 'seller',
        email: email,
      };
      login(userData);
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Seller Registration / Login</h2>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <input
          type="email"
          placeholder="Seller Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Register / Login</button>
      </form>
    </div>
  );
}
