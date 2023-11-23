"use client";

import { Main } from "next/document";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); 
    }

    return (
        <main className='bg-slate-200'>
            <h1>Image Search</h1>
            <input 
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                class="w-64 p-2.5 outline-none rounded-tl h-10 align-middle" 
                placeholder="Search Image" 
                aria-label="Search Image"
             />
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSearch}
            >
                Search
            </button>
        </main>
    )
}