import Box from '@mui/material/Box';
import { Button, TextField, Typography } from "@mui/material";

function Home () {
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
            <Typography component={"h1"} fontSize={{ xs: 16, sm: 20, md: 24 }}>Olá, seja bem-vindo!</Typography>
            
            <TextField 
                variant="outlined" 
                placeholder='Digite o seu nome:'
                sx={{
                    width: { xs: '90%', sm: '300px' },
                    marginBottom: "10px",
                }}
            />
            
            <Button 
                sx={{
                    width: { xs: '90%', sm: '300px' }
                }}
                variant="contained" 
                type="submit"
            >
                Entrar
            </Button>
        </Box>
    );
}

export default Home;
