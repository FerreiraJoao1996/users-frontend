import { useForm } from "react-hook-form";
import { LoginDTO } from "./dto/login-dto";
import View from "./view";
import { useLogin } from "./api/login";

function Login() {
    const { mutate: login } = useLogin();

    const form = useForm<LoginDTO>({
        defaultValues: {
            username: "",
            password: "",
        }
    });

    const onSubmit = (data: LoginDTO) => {
        login(data);
    };

    return (
        <View
            form={form}
            onSubmit={onSubmit}
        />
    );
};

export default Login;
