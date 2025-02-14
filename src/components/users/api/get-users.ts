import { useQuery } from "@tanstack/react-query";
import api from "../../../configs/api";

export interface Users {
    id: number;
    name: string;
    salary: string;
    company_value: string;
    createdAt: string;
    updatedAt: string;
}

interface Response {
	users: Users[]
}

const getUsers = async () => {
	const response = await api.get<Response>(`/user`);
	console.log(response) 

	return response
};

const queryKey = ["users", "get"];

export const useUsers = () => {

	return useQuery({
		queryKey: queryKey,
		queryFn: () => getUsers(),
	});
};
