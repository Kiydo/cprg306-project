"use client"

import React, { useEffect, useState} from "react";
import NavBar from "../../../navBar";
import Link from "next/link";

export default function SavedPhotos() {
    const [savedPhotos, setSavedPhotos] = useState([]);


    useEffect(() => {
        const savedPhotosData = JSON.parse(localStorage.getItem('savedPhotos')) || [];
        setSavedPhotos(savedPhotosData);
    }, []);

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

            <Link href="../page.js">Home</Link>
        </main>
        
    )
};

