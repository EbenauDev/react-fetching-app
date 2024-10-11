import { useEffect, useState } from "react";
import HttpClient from '../services/http-client';

export function useFetch(url) {
    const client = new HttpClient();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        client
            .get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error.response.data);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);
    return {
        data,
        isFetching,
        error,
    }
}