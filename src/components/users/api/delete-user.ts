import { useMutation } from "@tanstack/react-query";
import api from "../../../configs/api";

const deleteUser = async (userId: number) => {
	return await api.delete(`/user/${userId}`);
};

const mutationKey = ["delete/user"];

export const useDeleteUser = () => {

	return useMutation({
		mutationFn: (userId: number) => deleteUser(userId),
		mutationKey: mutationKey
	});
};
