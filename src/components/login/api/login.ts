import { useIsMutating, useMutation } from "@tanstack/react-query";
import api from "../../../configs/api";
import { LoginDTO } from "../dto/login-dto";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

const loginRequest = async (data: LoginDTO) => {
    const response = await api.post('/login', data);
    return response.data;
};

const LOGIN_MUTATION_KEY = ["login_mutation"];

export function useIsLoggingIn() {
    return Boolean(useIsMutating({ mutationKey: LOGIN_MUTATION_KEY }));
}

export const useLogin = () => {
    const { login: loginAuth } = useAuth();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: loginRequest,
        mutationKey: LOGIN_MUTATION_KEY,
        gcTime: 0,
        onSuccess: (data) => {
            const token = data?.token;
            const user = data?.user;

            if (token && user) {
                loginAuth(user, token);
                api.defaults.headers.common.Authorization = `Bearer ${token}`;
                navigate("/");
            } else {
                throw new Error("Token ou usuário inválido!");
            }
        },
        onError: () => {
            throw new Error("Erro ao fazer login!");
        }
    });
};
