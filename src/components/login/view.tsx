import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import FormTextField from '../global/form-text-field';
import { UseFormReturn } from 'react-hook-form';
import { LoginDTO } from './dto/login-dto';

interface Props {
    form: UseFormReturn<LoginDTO>;
    onSubmit: (data: LoginDTO) => void;
}

function View(props: Props) {
    const { form, onSubmit } = props

    const { control, handleSubmit } = form;

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                maxWidth: 400,
                padding: 3,
                boxSizing: "border-box",
            }}
        >
            <img src="/images/lorem-ipsum.png" width={"150"} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2, width: "100%" }}>
                
                <FormTextField
                    control={control}
                    name="username"
                    placeholder="Usuário"
                    rules={{
                        required: "Digite o usuário",
                    }}
                />

                <FormTextField
                    control={control}
                    name="password"
                    placeholder="Senha"
                    rules={{
                        required: "Digite a senha",
                    }}
                />
            </Box>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    width: "100%",
                    height: "2.5em",
                    backgroundColor: "#EC6724",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "12px",
                    fontSize: "16px",
                    '@media (max-width:600px)': {
                        fontSize: "14px",
                    },
                }}
            >
                Entrar
            </Button>
        </Box>
    );
}

export default View;
