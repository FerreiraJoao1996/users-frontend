import { Box, Button, Dialog, Typography, IconButton } from "@mui/material";
import { useDeleteStore } from "./store";
import CloseIcon from "@mui/icons-material/Close";

const DeleteModal = () => {
    const { clientName, fnCallback, closeModal, open } = useDeleteStore();

    const handleDelete = async () => {
        if (fnCallback) {
            await fnCallback();
        }
    };

    return (
        <Dialog open={open} onClose={closeModal}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    p: 2,
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
                        Excluir Cliente:
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
                <Typography component="h5" mb={2}>
                    Você está prestes a excluir o cliente: <strong>{clientName}</strong>
                </Typography>
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    sx={{
                        width: "100%",
                        backgroundColor: "#EC6724",
                        fontWeight: "bold",
                        textTransform: "none",
                    }}
                >
                    Excluir Cliente
                </Button>
            </Box>
        </Dialog>
    );
};

export default DeleteModal;
