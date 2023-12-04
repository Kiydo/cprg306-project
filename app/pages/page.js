"use client";
import SearchBox from './components/search-box';
// import Login from './screens/login';
import Images from './components/images';
// import PlaceHolder from './components/placeholder';
import FetchPhotos from './components/fetch-data';
import NavBar from '../navBar';

// Test
import { useUserAuth } from './_utils/auth-context';

import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { savePhoto } from './_services/photo-service'

export const ImageContext = createContext();

export default function Page() {
    // const { response, loading, error, fetchData } = FetchPhotos(`search/photos?page=1&query=office&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    // const { response, loading, error, fetchData } = FetchPhotos(`https://api.unsplash.com/search/collections?page=1&query=schools`);
    const [search, setSearch] = useState('');
    const { response, loading, error, fetchData } = FetchPhotos(search);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        console.log('Authenticated user: ', user);
    }, [user]);


    const handleSignIn = async () => {
        await gitHubSignIn();
        console.log(user)
        console.log('user')
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    const handleSave = async (photo) => {
        
        if (user) {
            console.log('Authenticated user UID:', user.uid);
            console.log('Authenticated user email:', user.email);
            console.log('photo to save:', photo)
            await savePhoto(user, photo);
        } else {
            console.log('User not logged in. Cannot save photo.')
        }
    };

    const handleSearch = (searchQuery) => {
        const query = searchQuery.replace(/\s/g, '+');
        const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}`;
        // const { response, loading, error, fetchData } = FetchPhotos(apiUrl);
        setSearch(apiUrl);

    }

    console.log('photos')
    console.log(response);

    const value = {
        user,
        response,
        loading,
        error, 
        fetchData
    };
    

    return (
        <main>
            {!user && (
                <div>
                    <button onClick={handleSignIn}>Sign In</button>
                    <h1>Log in to save photos</h1>
                </div>
                
            )
            }
            {user && (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
            <ImageContext.Provider value={value}>
                {user && (
                    <NavBar />
                )}
                {/* <SavedPhotos /> */}
                {/* <Login /> */}
                <SearchBox onSearch={handleSearch}/>
                <Images onSave={handleSave}/>
            </ImageContext.Provider>
        </main>
    )
}