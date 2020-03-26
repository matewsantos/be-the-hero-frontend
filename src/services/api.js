import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.252.90:3333'
})

export default api;