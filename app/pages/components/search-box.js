"use client";

// import { Main } from "next/document";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); 
    }

    return (
        <main className='flex items-center justify-center bg-slate-200 p-16'>
            <div className="text-center">
                {console.log('Page start test')}
            <h1 className="text-4xl p-2 font-bold ">Image Search</h1>
                <input 
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-96 p-2.5 outline-none rounded-tl h-10 align-middle" 
                    placeholder="Search Image" 
                    aria-label="Search Image"
                />
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <h2 className="pt-12">Click on the photo to save!</h2>
            </div>

            
        </main>
    )
}