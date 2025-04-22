import axios from "axios";

//one place to change in prod
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000',
});

api.interceptors.request.use((cfg) => {
    //attach token from local storage if present
    const token = typeof window !== 'undefined' ? localStorage.getItem('jwt') : null;
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
})