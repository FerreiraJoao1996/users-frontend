import Box from '@mui/material/Box';
import { Button, TextField, Typography } from "@mui/material";
import { useUserStore } from '../../store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Home () {
    const { setName, name } = useUserStore();
    const navigate = useNavigate();
    const handleName = (value: string) => {
        if(value !== null && value !== "") setName(value)
    }

    const handleChange = () => {
        if(name === null || name === "") 
            return toast.error("Preencha seu nome para continuar!")

        return navigate("/users")
    }

    return (
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
                padding: 2,
            }}
        >
            <Typography 
                component={"h1"} 
                fontSize={{ xs: 16, sm: 20, md: 24 }}
                sx={{
                    fontWeight: 400
                }}
            >
                Olá, seja bem-vindo!
            </Typography>
            
            <TextField 
                variant="outlined" 
                placeholder='Digite o seu nome:'
                sx={{
                    width: { xs: '90%', sm: '300px' },
                    marginBottom: "10px",
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#EC6724',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#EC6724',
                        },
                    },
                }}  
                onChange={(e) => handleName(e.currentTarget.value)}        
            />
            
            <Button 
                sx={{
                    width: { xs: '90%', sm: '300px' },
                    backgroundColor: "#EC6724",
                    fontWeight: "bold",
                    textTransform: "none",
                }}
                variant="contained" 
                type="submit"
                onClick={handleChange}
            >
                Entrar
            </Button>
        </Box>
    );
}

export default Home;
