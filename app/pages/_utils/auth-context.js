"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  // Email Sign up
  const emailSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Sign up successful!');
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Error Signing up');
    }
  };
  // Email Sign in
  const emailSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Sign in successful!');
    } catch (error) {
      console.error('Error signing in:', error.message);
      alert('Error signing in');
    }
  };

  // Github Sign In
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
 
  return (
    // <AuthContext.Provider value={{ user, gitHubSignIn, emailSignUp, emailSignIn, firebaseSignOut }}>
    <AuthContext.Provider value={{ user, emailSignUp, emailSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  const context = useContext(AuthContext);
  console.log('context: ',context);
  return context;
};

// export default useUserAuth;