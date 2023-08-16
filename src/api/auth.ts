import http from "./http";

export const login = (data: { phone: string, passWord: string }) => http.post<{ access_token: string }>(`/auth/login`, data);