import axios from 'axios'
import { getToken, logout } from "./auth"

// Instância do Axios, define a URL base
const api = axios.create({
    baseURL: 'http://localhost:3333'
})


// Middleware: Requisição - Token
// Realiza ação em todas as requisições, no caso, envia o Token
api.interceptors.request.use(async config => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})


// Middleware: Resposta
// Realiza ações em TODAS as respostas
api.interceptors.response.use((response) => {
    // Caso de sucesso, retorna a resposta
    return response;
}, (error) => {

    let status = error.response.status
    let path = window.location.pathname

    // Caso a rota não for de login e o status for de não autorizado
    // Faz o redirect para o login. Dessa forma qualquer requisição com 
    // Token expirado ou inválido forçara o usuário a fazer login
    if (path !== '/login' && status === 401) {
        logout();
        document.location.reload(true)
    }

    // Retorna o erro
    return Promise.reject(error);
});


export default api