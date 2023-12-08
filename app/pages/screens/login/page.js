// pages/login.js
"use client";

import { useState } from 'react';
import { useUserAuth } from '../../_utils/auth-context';
import NavBar from '../../../navBar';

const Login = () => {
  const { emailSignIn } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        await emailSignIn(email, password);
      } catch (error) {
        console.error('Error signing in:', error.message);
      }
  };

  return (
    <div>
        <NavBar />
      <h1>Login</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
