//Axios
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export const predict = (formData, language) => instance.post(`/predict?language=${language}`, formData);
