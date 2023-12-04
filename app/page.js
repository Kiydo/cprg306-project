"use client";

// import { Main } from 'next/document'
// import Image from 'next/image'
// import SearchBox from './components/search-box'
import MainPage from './pages/page';

// Testing
// import { useUserAuth } from "./pages/_utils/auth-context"; // Doesn't go here
import { AuthContextProvider } from './pages/_utils/auth-context';

export default function Home() {
  // const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // const handleSignIn = async () => {
  //   await gitHubSignIn();
  //   console.log(user)
  //   console.log('user')
  // };

  // const handleSignOut = async () => {
  //   await firebaseSignOut();
  // };

  return (
    <main>
      <AuthContextProvider>
        <MainPage />
      </AuthContextProvider>
    </main>
  )
}
