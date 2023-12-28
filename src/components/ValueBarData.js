import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import '../utils/Main.css';
import useYearlyData from '../hooks/useYearlyData';
import LineChart from '../utils/LineChart';
import { useSelector } from 'react-redux';

const ValueBarData = () => {
    const meatId = useSelector((state) => state.outlet.valueMeatState);
    const outletId = useSelector((state) => state.outlet.outletState);
    const year = useSelector((state) => state.outlet.valueYearState);

    const yearData = useYearlyData(meatId, outletId, year, "Total Value (Rs)", "totalValue");
    console.log("rerender");
    return (
        <div className='barChartCont'>
            <LineChart chartData={yearData} />
        </div>
    );
};

export default ValueBarData;
