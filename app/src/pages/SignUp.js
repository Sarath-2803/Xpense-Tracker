import React, { useState } from 'react';
import { auth } from '../Firebase/Auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css';
import Button from '../components/Button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginfun = () => {
    window.location.href = '/login';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id='conatiner'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='inputDiv'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>or</p>
        <Button text='Login' id='loginBtn' onClick={loginfun}/>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;