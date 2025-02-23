import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Typography variant="h1" color="#EC6724">
        404
      </Typography>
      <Typography variant="h5" gutterBottom color="#EC6724">
        Oops! Página não encontrada.
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2}>
        A página que você está procurando pode ter sido removida ou o link está incorreto.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" sx={{backgroundColor: "#EC6724"}}>
        Voltar para a Página Inicial
      </Button>
    </Box>
  );
};

export default NotFoundPage;
