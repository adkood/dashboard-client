import React, { useState, useEffect } from 'react';
import BarChart from '../utils/BarChart';
import 'chart.js/auto';
import '../utils/Main.css';
import useYearlyData from '../hooks/useYearlyData';
import { useSelector } from 'react-redux';

const QuantityBarData = () => {
    
    const meatId = useSelector((state) => state.outlet.quantityMeatState);
    const outletId = useSelector((state) => state.outlet.outletState);
    const year = useSelector((state) => state.outlet.quantityYearState);

    const yearData = useYearlyData(meatId, outletId, year, "Quantity Sold (Kg)", "quantity");
     
    return (
        <div className='barChartCont'>
            <BarChart chartData={yearData} />
        </div>
    );
};

export default QuantityBarData;
