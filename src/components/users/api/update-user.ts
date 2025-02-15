import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "../dto/users";
import api from "../../../configs/api";

interface Response {
    code: number;
    message: string;
}

export const updateUser = async (
	data: CreateUser
) => {
	return await api.put<Response>(
	    `/user/${data.id}`,
		data
	);
};

const mutationKey = ["update/user"];

export const useUpdateUser = () => {

	return useMutation({
		mutationFn: (data: CreateUser) =>
			updateUser(data),
		mutationKey: mutationKey
	});
};
