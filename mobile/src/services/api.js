import axios from 'axios';

const api = axios.create({
    baseURL: 'IPConfig'
})

export default api;