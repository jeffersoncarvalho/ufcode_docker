import axios from 'axios';

const api = axios.create({
    baseURL: 'http://aiuaba.quixada.ufc.br:3000'
});

export default api;

