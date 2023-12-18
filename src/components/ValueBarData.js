import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import '../utils/Main.css';
import useYearlyData from '../hooks/useYearlyData';
import LineChart from '../utils/LineChart';

const ValueBarData = () => {
    const meatId = 1;
    const outletId = 1;
    const year = 2022;

    const yearData = useYearlyData(meatId, outletId, year, "Total Value (Rs)", "totalValue");
    
    return (
        <div className='barChartCont'>
            <LineChart chartData={yearData} />
        </div>
    );
};

export default ValueBarData;
