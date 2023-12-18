import react, { useEffect, useState } from 'react';
import axios from 'axios';

const useApi = (endPoint, method = 'get', params = null) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {

                let response;
                if (method.toLowerCase() === 'get') {
                    response = await axios.get('http://localhost:8000/api' + endPoint);
                }
                else if (method.toLowerCase() === 'post') {
                    response = await axios.post('http://localhost:8000/api' + endPoint, params);
                }

                setData(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        apiCall();
    }, [endPoint,method,params]);

    return { data, loading, error };
}

export default useApi;