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
    <div className="min-h-screen">
        <NavBar />
        <div className=" flex  justify-center">
            <div className='flex flex-col p-12'>
                <h1 className='font-bold pb-4 text-lg'>Sign Up</h1>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='mt-4'>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={handleSignUp}
                >
                        Sign Up
                </button>
            </div>
      </div>
    </div>
  );
};

export default Signup;
