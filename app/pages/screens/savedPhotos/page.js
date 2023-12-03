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

    return (
        <main>
            <NavBar />
            <h2>Saved Photos</h2>
            <ul>
                {savedPhotos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.urls.small} alt={photo.alt_description} className="w-96 h-96" />
                    </li>
                ))}
            </ul>

            <Link href="../page.js">Home</Link>
        </main>
        
    )
};

