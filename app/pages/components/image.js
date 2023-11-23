"use client";

const Image = ({ data }) => {
    return (
        // <a href={data.urls.regular}>
        //     <img src={data.urls.small} alt={data.alt_description} />
        // </a>
        <li key={data.id}>
            <img src={data.urls.small} alt={data.alt_description} />
        </li>
    )
};

export default Image;