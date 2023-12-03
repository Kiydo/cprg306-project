import Link from "next/link";

export default function NavBar() {
    return (
        <main className="p-1">
            {/* <Link href="" className="mr-8 ml-4 hover:text-sky-700">
                Home
            </Link>
            
            <button className="mr-8 hover:text-sky-700">Login</button>

            <Link href="/screens/saved-photos" className="mr-8 hover:text-sky-700">     
                Saved
            </Link>

            <Link href="/test">
                <a>Test</a>
            </Link> */}

            <nav>
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
                </ul>
            </nav>
        </main>
    )
}