import { useForm } from "react-hook-form";
import { useUsers } from './api/get-users';
import View from './view';
import { Users } from "./dto/users";

function Logic () {
    const { data, isPending } = useUsers();

    const form = useForm<Users>({
		defaultValues: {
			name: "",
			salary: "",
			company_value: ""
		}
	});



    if(isPending || !data?.data?.users) {
        return <></>
    }
    return (
        <View 
            data={ data?.data?.users }
        />
    );
}

export default Logic;
