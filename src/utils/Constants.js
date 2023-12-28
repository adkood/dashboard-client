export const API_URL = process.env.NODE_ENV === "development" ? 'http://localhost:8000/api' : 'https://dashboard-server-ghnx.onrender.com/api';

export const DEFAULT_CHART_DATA = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: "Loading...",
        data: Array(12).fill(0)
    }]
};

export const DEFAULT_POPU_DATA = {
    // labels: ['Chicken', 'Duck', 'Mutton', 'Pork', 'Turkey'],
    datasets: [{
        label: "Popularity Chart",
        data: Array(5).fill(0)
    }]
};