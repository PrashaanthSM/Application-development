import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Import CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for pop-up message
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., checking credentials)
    setMessage('Login successful'); // Set the message to be displayed

    setTimeout(() => {
      setMessage(''); // Clear the message after 2 seconds
      navigate('/dashboard'); // Redirect to the Dashboard page
    }, 2000);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && (
        <div className="popup-message">{message}</div>
      )}
      <div className="redirect-options">
        <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default LoginPage;
