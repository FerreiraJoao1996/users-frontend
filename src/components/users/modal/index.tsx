import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Users } from "../dto/users";
import FormTextField from "../../form-text-field.tsx";
import { useUserStore } from "../../../store/index.ts";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
    form: UseFormReturn<Users>;
    onSubmit: (data: Users) => void;
    mode: 'create' | 'edit'
}

const Modal = (props: Props) => {
    const { form, onSubmit, mode } = props;
    const { modalOpen, closeModal } = useUserStore();
    const { handleSubmit, control } = form;

    return (
        <Dialog open={modalOpen} onClose={closeModal}>
            <Box
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    p: 3,
                    width: "500px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                    }}
                >
                    <Typography
                        component="h5"
                        fontWeight="bold"
                        sx={{ textAlign: "left", flex: 1 }}
                    >
                        {mode === 'create' ? 'Criar cliente:' : 'Editar cliente:'}
                    </Typography>
                    <IconButton
                        onClick={closeModal}
                        sx={{
                            width: "0.8em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#000",
                            p: 0
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
                    <FormTextField 
                        control={control} 
                        name={'name'} 
                        placeholder={'Digite o nome:'} 
                        rules={{
                            required: 'Este campo é obrigatório',
                            pattern: {
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                                message: 'Digite apenas letras',
                            },
                        }} 
                    />

                    <FormTextField 
                        control={control} 
                        name={'salary'} 
                        placeholder={'Digite o salário: (R$)'} 
                        rules={{
                        required: 'Este campo é obrigatório',
                        pattern: {
                            value: /^\d+$/,
                            message: 'Digite apenas números',
                        }
                    }}/>
                    <FormTextField 
                        control={control} 
                        name={'company_value'} 
                        placeholder={'Digite o valor da empresa: (R$)'} 
                        rules={{
                        required: 'Este campo é obrigatório',
                        pattern: {
                            value: /^\d+$/,
                            message: 'Digite apenas números',
                        },
                    }}/>
                </Box>
                <Button
                    type='submit'
                    variant="contained"
                    sx={{
                        width: "100%",
                        backgroundColor: "#EC6724",
                        fontWeight: "bold",
                        textTransform: "none",
                    }}
                >
                    {mode === 'create' ? 'Criar cliente' : 'Editar cliente'}
                </Button>
            </Box>
        </Dialog>
    );
};

export default Modal;