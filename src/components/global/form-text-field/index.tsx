import { TextField } from "@mui/material";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface Props {
    control: Control<FieldValues> | Control<any>; 
    name: string;
    placeholder?: string;
    rules?: RegisterOptions
}

const FormTextField = (props: Props) => {
    const { control, name, placeholder, rules } = props;

    return (
       
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field,fieldState }) => (
                <TextField
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        textTransform: "none",
                        "& .MuiOutlinedInput-root": {
                            height: "2.5em",
                            "&:hover fieldset": {
                                borderColor: "#EC6724",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#EC6724",
                            },
                        },
                    }}
                    placeholder={placeholder ?? ""}
                    error={!!fieldState.error}
                    helperText={fieldState.error && fieldState.error.message}
                    {...field}
                />
            )}
        />
    );
};

export default FormTextField;
