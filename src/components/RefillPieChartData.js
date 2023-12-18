import react from 'react';
import PieChart from '../utils/PieChart';
import useYearlyData from '../hooks/useYearlyData';

const RefillPieChartData = () => {
    const meatId = 1;
    const outletId = 1;
    const year = 2022;

    const yearData = useYearlyData(meatId, outletId, year, "Quantity Sold (Kg)", "quantity");
    
    return (
        <div className='barChartCont'>
            <PieChart chartData={yearData} />
        </div>
    );

}

export default RefillPieChartData;