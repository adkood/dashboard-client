// export const API_URL = process.env.NODE_ENV === "development" ? 'http://localhost:8000/api' : 'https://dashboard-server-ghnx.onrender.com/api';
export const API_URL = 'https://dashboard-server-ghnx.onrender.com/api';
export const DEFAULT_CHART_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: "Quantity Sold",
        data: Array(12).fill(0)
    }]
};