import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Easy4Rent U</h1>
      <button onClick={() => navigate('/user-login')}>User Login</button>
      <button onClick={() => navigate('/seller')}>Seller</button>
    </div>
  );
}