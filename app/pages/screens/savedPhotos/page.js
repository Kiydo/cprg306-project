"use client"

import React, { useEffect, useState} from "react";
import NavBar from "../../../navBar";
import Link from "next/link";
import { getPhotos } from "../../_services/photo-service"

export default function SavedPhotos({ user }) {
    const [savedPhotos, setSavedPhotos] = useState([]);


    // useEffect(() => {
    //     const savedPhotosData = JSON.parse(localStorage.getItem('savedPhotos')) || [];
    //     setSavedPhotos(savedPhotosData);
    // }, []);
    useEffect(() => {
        console.log('loading photo useEffect works-ish');
        if (user) {
          const fetchSavedPhotos = async () => {
            const photos = await getSavedPhotos(user);
            setSavedPhotos(photos);
            console.log('inside useEffect for loading photo')
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
                {savedPhotos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.urls.small} alt={photo.alt_description} className="w-96 h-96" onClick={() => handleDelete(photo.id)}/>
                    </li>
                ))}
            </ul>

            {/* <Link href="../page.js">Home</Link> */}
        </main>
        
    )
};

