import Link from "next/link";
import { useUserAuth } from './pages/_utils/auth-context';

export default function NavBar() {
    const { user, emailSignUp, emailSignIn, firebaseSignOut } = useUserAuth();

    const handleSignOut = async () => {
        await firebaseSignOut();
    };


    return (
        <main className="p-2 bg-blue-300 font-bold">
            <nav>
                {!user && (
                    <div>
                        
                        <ul className="flex">
                            <li>
                                <Link href="/pages" className="mr-8 ml-8 hover:text-sky-700">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/screens/login" className="mr-8 ml-4 hover:text-sky-700">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/screens/signUp" className="mr-8 ml-4 hover:text-sky-700">
                                    Sign Up
                                </Link>
                            </li>
                           
                        </ul>
                        {/* <h1>Log in to save photos</h1> */}
                    </div>
                )}
                {user && (
                    <ul className="flex">
                        <li>
                            <Link href="/pages" className="mr-8 ml-4 hover:text-sky-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/screens/savedPhotos" className="mr-8 ml-4 hover:text-sky-700">
                                Saved
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages">
                                <button 
                                    onClick={handleSignOut}
                                    className="mr-8 ml-4 hover:text-sky-700"
                                >
                                    Sign Out
                                </button>
                            </Link>
                        </li>
                    </ul>
                )}
                </nav>
        </main>
    )
}