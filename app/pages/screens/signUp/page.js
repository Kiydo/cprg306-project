// pages/signup.js
"use client";

import { useState } from 'react';
import { useUserAuth } from '../../_utils/auth-context';
import NavBar from '../../../navBar';

const Signup = () => {
  const { emailSignUp } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    await emailSignUp(email, password);
  };

  return (
    <div>
        <NavBar />
      <h1>Sign Up</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Signup;
