import react from 'react';
import PieChart from '../utils/PieChart';
import useGetPopularity from '../hooks/useGetPopularity';

const PopularPieData = () => {
    const popuData = useGetPopularity();
    return (
        <div className='barChartCont'>
            <PieChart chartData={popuData} />
        </div>
    );

}

export default PopularPieData;