// Chave do Token, colocar um
export const TOKEN_KEY = "65a29308d13f891091a0df7551e7825f";

// Verifica se esta autenticado
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

// Retorna o Token
export const getToken = () => localStorage.getItem(TOKEN_KEY);

// Login
export const login = (token: any) => {
    localStorage.setItem(TOKEN_KEY, token);
};

// Logout
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};