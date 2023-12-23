import React, { useState, useEffect } from 'react';
import BarChart from '../utils/BarChart';
import 'chart.js/auto';
import '../utils/Main.css';
import useYearlyData from '../hooks/useYearlyData';

const RefillCountData = () => {
    const meatId = 1;
    const outletId = 1;
    const year = 2022;

    const yearData = useYearlyData(meatId, outletId, year, "Quantity Sold (Kg)", "quantity");
    
    return (
        <div className='barChartCont'>
            <BarChart chartData={yearData} />
        </div>
    );
};

export default RefillCountData;
