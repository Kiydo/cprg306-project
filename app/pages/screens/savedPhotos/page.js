"use client"

import React, { useEffect, useState} from "react";
import NavBar from "../../../navBar";
import Link from "next/link";
import { getPhotos } from "../../_services/photo-service"
import { useUserAuth } from '../../_utils/auth-context';
import { deletePhoto } from '../../_services/photo-service';

export default function SavedPhotos() {
    const [savedPhotos, setSavedPhotos] = useState([]);
    const { user, emailSignUp, emailSignIn, firebaseSignOut } = useUserAuth();

    
    useEffect(() => {
        // console.log('loading photo useEffect works-ish');
        // console.log('Athenticated user: ', user)
        // console.log('user id: ', user.uid)
        if (user && user.uid) {
            // console.log('User ID: ', user.uid)
          const fetchSavedPhotos = async () => {
            try {
                const photos = await getPhotos(user);
                setSavedPhotos(photos);
                // console.log('Fetched photos:', photos);
              } catch (error) {
                console.log('Error fetching photos: ', error);
              }
          };
        //   console.log('something went wrong when loading photo')
          fetchSavedPhotos();
        }
    }, [user]);

    
    const handleDelete = async (photoId) => {
        const updatedLocalPhotos = savedPhotos.filter((photo) => photo.id !== photoId);
        localStorage.setItem('savedPhotos', JSON.stringify(updatedLocalPhotos));
        setSavedPhotos(updatedLocalPhotos);
        
        const userId = user.uid;

        // Delete from the database
        await deletePhoto(userId, photoId);

        // Update the local state after deleting from the database
        const updatedSavedPhotos = savedPhotos.map((userData) => {
            const updatedPhotos = userData.photos.filter((photo) => photo.id !== photoId);
            return { ...userData, photos: updatedPhotos };
        });
        

        setSavedPhotos(updatedSavedPhotos);
    };

    return (
        <main className="min-h-screen">
            <NavBar />
            <div className="grid place-items-center bg-slate-200 p-16">
                <h2 className="text-4xl p-2 font-bold ">Saved Photos</h2>
            </div>
            <ul className="grid grid-cols-5 gap-3 bg-slate-200">
                {savedPhotos.map((userData) => {
                    const photos = userData.photos || [];

                    return photos.map((photo) => {
                        // console.log('Processing photo:', photo);
                        return (
                            <li key={photo.id}>
                                <img
                                    src={photo.urls?.small}
                                    alt={photo.alt_description}
                                    className="w-96 h-96 object-cover"
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

