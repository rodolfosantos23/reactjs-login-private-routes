import axios from 'axios'
import { getToken, logout } from "./auth"

const api = axios.create({
    baseURL: 'http://localhost:3333'
})


// Middleware: Requisição - Token
api.interceptors.request.use(async config => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})


// Middleware: Resposta
api.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {

    let status = error.response.status
    let path = window.location.pathname

    // Do something with response error
    if (path !== '/login' && status === 401) {
        logout();
        document.location.reload(true)
    }
    return Promise.reject(error);
});


export default api