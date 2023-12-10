// pages/signup.js
"use client";

import { useState } from 'react';
import { useUserAuth } from '../../_utils/auth-context';
import NavBar from '../../../navBar';
import Link from "next/link";


// const Signup = () => {
//   const { emailSignUp } = useUserAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     await emailSignUp(email, password);
//   };

//   return (
//     <div className="min-h-screen">
//         <NavBar />
//         <div className=" flex  justify-center">
//             <div className='flex flex-col p-12'>
//                 <h1 className='font-bold pb-4 text-lg'>Sign Up</h1>
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <label className='mt-4'>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <Link href="../screens/login">
//                   <button
//                       className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
//                       onClick={handleSignUp}
//                   >
//                           Sign Up
//                   </button>
//                 </Link>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Signup;
const Signup = () => {
  const { emailSignUp } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      await emailSignUp(email, password);
      // alert('Sign up successful!');
    } catch (error) {
      // Handle signup errors
      setError(error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center bg-slate-200 min-h-screen">
        <div className='flex flex-col p-12'>
          <h1 className='font-bold pb-4 text-lg'>Sign Up</h1>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className='mt-4'>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-red-500">{error}</p>}
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
