import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/Constants";
import { DEFAULT_POPU_DATA } from "../utils/Constants";

const useGetPopularity = () => {

    const [popu, setPopu] = useState(DEFAULT_POPU_DATA);

    const fetchData = async () => {
        const response = await axios.get(API_URL + `/getPolularity`);
        const data = response.data.data;
        console.log(data);
        setPopu({
            // labels: ['Chicken', 'Duck', 'Mutton', 'Pork', 'Turkey'],
            datasets: [{
                label: "Popularity Chart",
                data: data.map((ele) => {
                    return ele.count;
                })
            }]
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return popu;
}

export default useGetPopularity;