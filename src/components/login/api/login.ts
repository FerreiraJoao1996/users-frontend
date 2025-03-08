import { useMutation } from "@tanstack/react-query";
import api from "../../../configs/api";
import { LoginDTO } from "../dto/login-dto";

interface Response {
    login: Login
}

interface Login {
    code: number;
    token: string;
}

export const login = async (
	data: LoginDTO
) => {
	return await api.post<Response>(
		'/login',
		data
	);
};

const mutationKey = ["login/user"];

export const useLogin = () => {

	return useMutation({
		mutationFn: (data: LoginDTO) =>
			login(data),
		mutationKey: mutationKey
	});
};
