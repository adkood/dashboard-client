import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, DEFAULT_CHART_DATA } from '../utils/Constants';

const useRefillData = (meatId, outletId, year) => {
    const [refillData, setRefillData] = useState(DEFAULT_CHART_DATA);

    const SumQuantity = (arr) => {
        return arr.reduce((acc, ele) => {
            return acc + ele.quantityRefilled;
        },0);
    }

    const fetchData = async () => {
        try {
            const requests = [];
            for (let month = 1; month <= 12; month++) {
                requests.push(
                    axios.get(API_URL + `/getRefillPerMonthForYear?meatId=${meatId}&inventoryId=${outletId}&year=${year}&month=${month}`)
                );
            }

            const responses = await Promise.all(requests);
            const newData = responses.map(response => response.data);

            setRefillData({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: `Refill Monitoring`,
                    data: newData.map((ele) => { 
                        const sum = SumQuantity(ele.data)
                        return sum;
                    })
                }]
            });
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, [meatId, outletId, year]);

    return refillData;
};

export default useRefillData;
