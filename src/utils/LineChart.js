import react from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ chartData }) => {
    return (
        <Line data={chartData}/>
    );
}

export default LineChart;