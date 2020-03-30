import axios from 'axios';

// add expo connection + node port

const api = axios.create({
    baseURL: 'http://192.168.1.23:3333'
})

export default api;