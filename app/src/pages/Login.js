import React, { useState } from 'react';
import { auth } from '../Firebase/Auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signupfun = () => {
    window.location.href = '/SignUp';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(email);
      //alert('Log In successfull!');
      window.location.href = '/Fields';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id='conatiner'>
      <h2>Log In</h2>
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
        <button type="submit">Log In</button>
        <p>or</p>
        <Button text='SignUp' id='signupBtn' onClick={signupfun}/>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;