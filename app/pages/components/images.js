"use client";

import { useContext } from "react"
import { ImageContext } from "../page"
// import Image from './image'

export default function Images() {
    const { response, loading, error, fetchData } = useContext(ImageContext);
    
    const handleSave = (photo) => {
        const savedPhotos = JSON.parse(localStorage.getItem('savedPhotos')) || [];
        const isPhotoSaved = savedPhotos.some((savedPhoto) => savedPhoto.id === photo.id);
        
        if (!isPhotoSaved) {
            const updatedSavedPhotos = [...savedPhotos, photo];
            localStorage.setItem('savedPhotos', JSON.stringify(updatedSavedPhotos));
            alert('Photo saved!');
        } else {
            alert('Photo already saved!');
        }

    };
    
    return (
        <div className="h-screen">
            {/* {response.map((data, key) => <Image key={key} data={data} /> )} */}
            <ul className="grid grid-cols-5 gap-3">
                {response.map((photo) => (
                    // <li key={photo.id}>
                    //     {console.log('Test')} {console.log(photo)}
                    //     {/* Check if 'cover_photo.urls.small' exists before rendering */}
                    //     {photo.cover_photo && photo.cover_photo.urls && photo.cover_photo.urls.small && (
                    //             <img src={photo.cover_photo.urls.small} alt={photo.title} />
                    //         )}
                    // </li>
                    <li key={photo.id} >
                        <img 
                            src={photo.urls.small} 
                            alt={photo.alt_description} 
                            className="w-96 h-96" 
                            onClick={() => handleSave(photo)}
                            />
                        {/* <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleSave(photo)}>Save</button> */}
                    </li>
                    
                ))}
            </ul>
        </div>
    )

}