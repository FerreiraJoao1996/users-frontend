import { useForm } from "react-hook-form";
import { useUsers } from './api/get-users';
import View from './view';
import { CreateUser, Users } from "./dto/users";
import { useUserStore } from "../../store";
import { useEffect } from "react";
import Modal from "./modal";
import toast from "react-hot-toast";
import { useCreateUser } from "./api/create-user";
import { useUpdateUser } from "./api/update-user";
import { formatCurrency } from "../../utils/format-currency";
import { unformatCurrency } from "../../utils/unformat-currency";

function Logic() {
    const { data, isPending, refetch } = useUsers();
    const { userId, mode, setModalOpen } = useUserStore();
    const { mutateAsync: create } = useCreateUser();
    const { mutateAsync: update } = useUpdateUser();

    const userData = data?.data?.users.find(item => item.id === userId);

    const defaultValues: CreateUser = {
        ...(userData?.id && { id: userData?.id }),
        name: userData?.name ?? "",
        salary: userData?.salary ? String(formatCurrency(userData.salary)) : "",
        company_value: userData?.company_value ? String(formatCurrency(userData.company_value)) : ""
    };

    const form = useForm<Users>({
        defaultValues: defaultValues
    });

    useEffect(() => {
		if (mode === "create") {
			form.reset({
				name: "",
				salary: "",
				company_value: ""
			});
		} else if (userData) {
			form.reset(defaultValues);
		}
	}, [mode, userData]);

    const onSubmit = (data: Users) => {
        const formattedData = {
            ...data,
            salary: String(unformatCurrency(data.salary)),
            company_value: String(unformatCurrency(data.company_value))
        };

        const handleSuccess = () => {
            setModalOpen(false);

            form.reset({
                name: "",
                salary: "",
                company_value: ""
            });

            refetch();
        };

        if (data.id) {
            toast.promise(
                update(formattedData, {
                    onSuccess: () => {
                        refetch();
                        handleSuccess();
                    }
                }),
                {
                    error: "Ocorreu um erro ao atualizar o usuário.",
                    success: "Usuário atualizado com sucesso.",
                    loading: 'Atualizando usuário'
                }
            );
        } else {
            toast.promise(
                create(formattedData, {
                    onSuccess: () => {
                        handleSuccess();
                    }
                }),
                {
                    error: "Ocorreu um erro ao criar o usuário.",
                    success: "Usuário criado com sucesso.",
                    loading: 'Criando usuário'
                }
            );
        }
    };

    if (isPending || !data?.data?.users) {
        return <></>;
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
                mode={mode}
            />
        </>
    );
}

export default Logic;
