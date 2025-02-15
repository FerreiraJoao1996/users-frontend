import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
    control: Control<FieldValues> | Control<any>; 
    name: string;
    placeholder?: string;
}

const FormTextField = (props: Props) => {
    const { control, name, placeholder } = props;

    return (
       
        <Controller
            name={name}
            control={control}
            rules={{
                required: 'Este campo é obrigatório',
            }}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        textTransform: "none",
                    }}
                    placeholder={placeholder ?? ""}
                    {...field}
                />
            )}
        />
    );
};

export default FormTextField;
