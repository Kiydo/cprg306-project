// "use client";

// // import { Main } from 'next/document'
// // import Image from 'next/image'
// // import SearchBox from './components/search-box'
// import MainPage from './pages/page';

// // Testing
// import { useUserAuth } from "./pages/_utils/auth-context"; // Doesn't go here


// export default function Home() {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   const handleSignIn = async () => {
//     await gitHubSignIn();
//     console.log(user)
//     console.log('user')
//   };

//   const handleSignOut = async () => {
//     await firebaseSignOut();
//   };

//   return (
//     <main>
//       {/* <MainPage /> */}
//       {!user && (
//         <button onClick={handleSignIn}>Sign In</button>
//       )
//       }
//       {user && (
//         <div>
//           <p>Welcome, {user.displayName} ({user.email})</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//           <ShopList />
//         </div>
//       )}
//     </main>
//   )
// }
