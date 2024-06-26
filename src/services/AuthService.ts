import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password})
    }

    static async registration(email: string, password: string, firstName:string, lastName:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.put<AuthResponse>('/auth/registration', {email, password, firstName, lastName})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

}