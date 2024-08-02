import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';  // Import CSS for PhoneInput
import './SignupPage.css';  // Import CSS file

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // State for pop-up message
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!phone) {
      setError('Phone number is required');
      return;
    }
    // Handle signup logic here (e.g., sending data to the server)
    setError('');
    setMessage('Signup successful'); // Set the message to be displayed

    setTimeout(() => {
      setMessage(''); // Clear the message after 2 seconds
      navigate('/login'); // Redirect to the Login page
    }, 2000);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
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
          <label>Phone Number:</label>
          <PhoneInput 
            international 
            defaultCountry="US" 
            value={phone} 
            onChange={setPhone} 
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign Up</button>
      </form>
      {message && (
        <div className="popup-message">{message}</div>
      )}
    </div>
  );
};

export default SignupPage;
