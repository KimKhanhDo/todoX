import axios from 'axios';

const BASE_URL =
    import.meta.env.MODE === 'development'
        ? 'http://127.0.0.1:3000/api'
        : '/api';

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
