import React, { useState, useEffect } from 'react';
import BarChart from '../utils/BarChart';
import 'chart.js/auto';
import '../utils/Main.css';
import useRefillData from '../hooks/useRefillData';
import { useSelector } from 'react-redux';

const RefillCountData = () => {
    const meatId = useSelector((state) => state.outlet.refillMeatState);
    const outletId = useSelector((state) => state.outlet.outletState);
    const year = useSelector((state) => state.outlet.refillYearState);


    const refillData = useRefillData(meatId, outletId, year);
    console.log(refillData);
    return (
        <div className='barChartCont'>
            <BarChart chartData={refillData} />
        </div>
    );
};

export default RefillCountData;
