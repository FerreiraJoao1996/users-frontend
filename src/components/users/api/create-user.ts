import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "../dto/users";
import api from "../../../configs/api";

interface Response {
    user: Users
}

interface Users {
    code: number;
    user: {
        name: string;
        salary: string;
        company_value: string;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export const createUser = async (
	data: CreateUser
) => {
	return await api.post<Response>(
		'/user/create',
		data
	);
};

const mutationKey = ["create/user"];

export const useCreateUser = () => {

	return useMutation({
		mutationFn: (data: CreateUser) =>
			createUser(data),
		mutationKey: mutationKey
	});
};
