// pages/login.js
"use client";

import { useState } from 'react';
import { useUserAuth } from '../../_utils/auth-context';
import NavBar from '../../../navBar';


const Login = () => {
  const { user, emailSignIn } = useUserAuth();
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
        <div className='bg-slate-200'>
              {user && (
                    <h1>Current Account: {user.email} </h1>

              )}
        </div>
        <div className=" flex  justify-center bg-slate-200 min-h-screen">
            <div className='flex flex-col p-12'>
                <h1 className='font-bold pb-4 text-lg' >Login</h1>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='mt-4'>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={handleLogin}
                    >
                    Login
                </button>
            </div>
            
        </div>
    </div>
  );
};

export default Login;
