import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://web-api-fiap.herokuapp.com/unidades'
});

export default api;