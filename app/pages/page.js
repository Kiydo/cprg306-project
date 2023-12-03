"use client";
import SearchBox from './components/search-box';
// import Login from './screens/login';
import Images from './components/images';
// import PlaceHolder from './components/placeholder';
import FetchPhotos from './components/fetch-data';
import NavBar from '../navBar';

import { createContext } from 'react';
import { useState } from 'react';

export const ImageContext = createContext();

export default function Page() {
    // const { response, loading, error, fetchData } = FetchPhotos(`search/photos?page=1&query=office&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    // const { response, loading, error, fetchData } = FetchPhotos(`https://api.unsplash.com/search/collections?page=1&query=schools`);
    const [search, setSearch] = useState('');
    const { response, loading, error, fetchData } = FetchPhotos(search);

    const handleSearch = (searchQuery) => {
        const query = searchQuery.replace(/\s/g, '+');
        const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}`;
        // const { response, loading, error, fetchData } = FetchPhotos(apiUrl);
        setSearch(apiUrl);

    }

    console.log('photos')
    console.log(response);

    const value = {
        response,
        loading,
        error, 
        fetchData
    };
    

    return (
        <main>
            <ImageContext.Provider value={value}>
                <NavBar />
                {/* <SavedPhotos /> */}
                {/* <Login /> */}
                <SearchBox onSearch={handleSearch}/>
                <Images />
            </ImageContext.Provider>
        </main>
    )
}