import { useForm } from "react-hook-form";
import { useUsers } from './api/get-users';
import View from './view';
import { CreateUser, Users } from "./dto/users";
import { useUserStore } from "../../store";
import { useEffect } from "react";
import Modal from "./modal";

function Logic () {
    const { data, isPending } = useUsers();
    const { userId } = useUserStore();
    const userData = data?.data?.users.find(item => item.id === userId);

    const defaultValues: CreateUser = {
		...(userData?.id && {
			id: userData?.id
		}),
		name: userData?.name ?? "",
        salary: userData?.salary ?? "",
        company_value: userData?.company_value ?? ""
	};

    const form = useForm<Users>({
		defaultValues: defaultValues
	});

    useEffect(() => {
        if (userData) {
            form.reset(defaultValues);
        }
    }, [userData]);

    const onSubmit = (data: Users) => {
        console.log("data: ", data);
	};

    if(isPending || !data?.data?.users) {
        return <></>
    }
    return (
        <>
            <View
                data={data?.data?.users}
                form={form}
                onSubmit={onSubmit}
            />
            <Modal
                form={form}
                onSubmit={onSubmit}
                mode="edit"
            />
        </>
    );
}

export default Logic;
