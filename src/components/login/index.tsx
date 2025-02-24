import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '../global/buttons/button-submit';

function Login () {
    const navigate = useNavigate();

    const handleChange = () => { 
        return navigate("/users")
    }

    return (
        <Box 
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: 400,
                padding: 3,
            }}
        >
            <Typography 
                component={"h1"} 
                fontSize={{ xs: 16, sm: 20, md: 24 }}
                sx={{
                    fontWeight: 400,
                    marginBottom: 1,
                }}
            >
                Olá, seja bem-vindo!
            </Typography>

            {/* <TextField 
                variant="outlined" 
                placeholder="Digite o seu nome:"
                sx={{
                    width: { xs: "90%", sm: "300px" },
                    marginBottom: "10px",
                    "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                            borderColor: "#EC6724",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#EC6724",
                        },
                    },
                }}
                onChange={(e) => handleName(e.currentTarget.value)}
            /> */}
            <ButtonSubmit onClick={handleChange} text={'Entrar'} color={"#EC6724"} />
        </Box>
    );
}

export default Login;
