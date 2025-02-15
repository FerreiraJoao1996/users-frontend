import { useQuery } from "@tanstack/react-query";
import api from "../../../configs/api";
import { Users } from "../dto/users";

interface Response {
	users: Users[]
}

const getUsers = async () => {
	const response = await api.get<Response>(`/user`);
	return response
};

const queryKey = ["users", "get"];

export const useUsers = () => {

	return useQuery({
		queryKey: queryKey,
		queryFn: () => getUsers(),
	});
};
