import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "./dto/login-dto";
import View from "./view";
import { useLogin } from "./api/login";

function Login() {

    const navigate = useNavigate();
    
    const { mutateAsync: login } = useLogin();

    const defaultValues: LoginDTO = {
        username: "",
        password: "",
    };

    const form = useForm<LoginDTO>({
        defaultValues: defaultValues
    });

    const onSubmit = (data: LoginDTO) => {
        return navigate("/")
        login(data, {
            onSuccess: () => {
                return navigate("/")
            }
        });
    };

    return (
        <View
            form={form}
            onSubmit={onSubmit}
        />
    );
}

export default Login;
