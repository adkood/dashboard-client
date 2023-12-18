export const API_URL = 'http://localhost:8000/api';
export const DEFAULT_CHART_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: "Quantity Sold",
        data: Array(12).fill(0)
    }]
};