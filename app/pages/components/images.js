"use client";

import { useContext } from "react"
import { ImageContext } from "../page"
// import Image from './image'

export default function Images() {
    const { response, loading, error, fetchData } = useContext(ImageContext);
    return (
        <div>
            {/* {response.map((data, key) => <Image key={key} data={data} /> )} */}
            <ul className="grid grid-cols-3 gap-4">
                {response.map((photo) => (
                    // <li key={photo.id}>
                    //     {console.log('Test')} {console.log(photo)}
                    //     {/* Check if 'cover_photo.urls.small' exists before rendering */}
                    //     {photo.cover_photo && photo.cover_photo.urls && photo.cover_photo.urls.small && (
                    //             <img src={photo.cover_photo.urls.small} alt={photo.title} />
                    //         )}
                    // </li>
                    <li key={photo.id}>
                        <img src={photo.urls.small} alt={photo.alt_description} />
                    </li>
                    
                ))}
            </ul>
        </div>
    )

}