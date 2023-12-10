"use client";

import { useContext } from "react"
import { ImageContext } from "../page"
// import Image from './image'

export default function Images({ onSave }) {
    const { user, response, loading, error, fetchData } = useContext(ImageContext);
    
    const handleSave = (photo) => {
        if (user) {
            const savedPhotos = JSON.parse(localStorage.getItem('savedPhotos')) || [];
            const isPhotoSaved = savedPhotos.some((savedPhoto) => savedPhoto.id === photo.id);
            
            if (!isPhotoSaved) {
                const updatedSavedPhotos = [...savedPhotos, photo];
                localStorage.setItem('savedPhotos', JSON.stringify(updatedSavedPhotos));
                alert('Photo saved!');
            } else {
                alert('Photo already saved!');
            } 
        } else {
            alert('Please login to save photos');
        }

    };
    
    return (
        <div className="min-h-screen bg-slate-200">
            {/* {response.map((data, key) => <Image key={key} data={data} /> )} */}
            <ul className="grid grid-cols-5 gap-3">
                {response.map((photo) => (
                    <li key={photo.id} >
                        <img 
                            src={photo.urls.small} 
                            alt={photo.alt_description} 
                            className="w-full h-96 object-cover" 
                            onClick={() => {
                                handleSave(photo); 
                                onSave(photo)
                            }}
                        />
                    </li>
                    
                ))}
            </ul>
        </div>
    )

}