import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, DEFAULT_CHART_DATA } from '../utils/Constants';

const useYearlyData = (meatId, outletId, year, label, forValue) => {
    const [yearData, setYearData] = useState(DEFAULT_CHART_DATA);

    const SumQuantity = (arr) => {
        return arr.reduce((acc, ele) => {
            return acc + (forValue === "quantity") ? ele.quantity : ele.totalValue;
        }, 0);
    }

    const fetchData = async () => {
        try {
            const requests = [];
            for (let month = 1; month <= 12; month++) {
                requests.push(
                    axios.get(API_URL + `/getPerMonthForYear?meatId=${meatId}&outletId=${outletId}&year=${year}&month=${month}`)
                );
            }

            const responses = await Promise.all(requests);
            const newData = responses.map(response => response.data);

            setYearData({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: `${label}`,
                    data: newData.map((ele) => SumQuantity(ele.data))
                }]
            });
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, [meatId, outletId, year, label, forValue]);

    return yearData;
};

export default useYearlyData;
