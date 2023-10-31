import http from "./http";

export const login = (data: { email: string, password: string }) => http.post<{ access_token: string }>(`/auth/login/mobile`, data);