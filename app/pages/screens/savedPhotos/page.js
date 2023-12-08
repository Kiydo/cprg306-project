"use client"

import React, { useEffect, useState} from "react";
import NavBar from "../../../navBar";
import Link from "next/link";
import { getPhotos } from "../../_services/photo-service"
import { useUserAuth } from '../../_utils/auth-context';

export default function SavedPhotos() {
    const [savedPhotos, setSavedPhotos] = useState([]);
    const { user, emailSignUp, emailSignIn, firebaseSignOut } = useUserAuth();

    // test

    // useEffect(() => {
    //     const savedPhotosData = JSON.parse(localStorage.getItem('savedPhotos')) || [];
    //     setSavedPhotos(savedPhotosData);
    // }, []);
    useEffect(() => {
        console.log('loading photo useEffect works-ish');
        console.log('Athenticated user: ', user)
        // console.log('user id: ', user.uid)
        if (user && user.uid) {
            console.log('User ID: ', user.uid)
          const fetchSavedPhotos = async () => {
            try {
                const photos = await getPhotos(user);
                setSavedPhotos(photos);
                console.log('Fetched photos:', photos);
              } catch (error) {
                console.log('Error fetching photos: ', error);
              }
          };
          console.log('something went wrong when loading photo')
          fetchSavedPhotos();
        }
    }, [user]);

    
    const handleDelete = (photoId) => {
        const updatedSavedPhotos = savedPhotos.filter((photo) => photo.id !== photoId);
        localStorage.setItem('savedPhotos', JSON.stringify(updatedSavedPhotos));
        setSavedPhotos(updatedSavedPhotos);
    };

    return (
        <main>
            <NavBar />
            <h2>Saved Photos</h2>
            <ul className="grid grid-cols-5 gap-3">
                {savedPhotos.map((userData) => {
                    const photos = userData.photos || [];

                    return photos.map((photo) => {
                        console.log('Processing photo:', photo);
                        return (
                            <li key={photo.id}>
                                <img
                                    src={photo.urls?.small}
                                    alt={photo.alt_description}
                                    className="w-96 h-96"
                                    onClick={() => handleDelete(photo.id)}
                                />
                            </li>
                        );
                    });
                })}
            </ul>

            {/* <Link href="../page.js">Home</Link> */}
        </main>
        
    )
};

