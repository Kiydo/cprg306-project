import { useState, useEffect } from "react";

const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

   
    const accessKey = process.env.NEXT_PUBLIC_UNSPLASHED_KEY;

    const fetchData = async () => {
        try {
            console.log('fetching data')
            // console.log(url);
            // console.log(accessKey);
            // console.log(`Client-ID ${accessKey}`);
            setLoading(true);
            const res = await fetch(url, {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            });
            const data = await res.json();
            // console.log(data)
            setResponse(data.results);
        } catch (error) {
            console.log('their was an error');
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, accessKey]);

    return {
        response,
        loading,
        error,
        fetchData,
    };
};

export default useAxios;