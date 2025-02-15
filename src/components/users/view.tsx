import { Box, Button, Typography } from '@mui/material';
import { Users } from './dto/users';
import { UseFormReturn } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import { useUserStore } from '../../store';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import { useDeleteStore } from '../modal/delete/store';
import { useDeleteUser } from './api/delete-user';
import { useUsers } from './api/get-users';
import RemoveIcon from '@mui/icons-material/Remove';
import { useUserPersistStore } from '../../store/user-persist';

interface Props {
    data: Users[];
    form: UseFormReturn<Users>;
    onSubmit: (data: Users) => void;
}

function View(props: Props) {
    const { data } = props;
    const { setUserId, setModalOpen, setMode } = useUserStore();
    const { addUser, removeUser, users } = useUserPersistStore();
    const { openModal, closeModal } = useDeleteStore();
    const { refetch } = useUsers();
    
    const handleAdd = (user: Users) => addUser(user);
    const handleRemove = (id: number) => removeUser(id);

    const handleEdit = (id: number) => {
        setUserId(id);
        setModalOpen(true);
        setMode('edit');
    };

    const { mutateAsync: deleteUser } = useDeleteUser();

    const handleDelete = (user: Users) => {
        if (user.id === undefined || !user.name) {
            toast.error("Usuário não encontrado!");
            return;
        }

        openModal({
            clientName: user.name ?? "",
            onAccept: async () => {
                await deleteUser(user.id, {
                    onSuccess: (data) => {
                        toast.success(data.data.message);
                        refetch();
                        closeModal();
                    }
                });
            }
        });
    };

    const handleAddNewUser = () => {
        setModalOpen(true);
        setMode('create');
    };

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Box
                mb={2}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'space-between',
                }}
            >
                {data.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            flex: '1 1 20%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 2,
                            borderRadius: '4px',
                            boxShadow: '0px 0px 4px 0px #0000001A',
                            '@media (max-width: 1024px)': {
                                flex: '1 1 45%',
                            },
                            '@media (max-width: 600px)': {
                                flex: '1 1 100%',
                            }
                        }}
                    >
                        <Typography>{item.name}</Typography>
                        <Typography>{item.salary}</Typography>
                        <Typography>{item.company_value}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 1 }}>
                            {users.find(user => user.id === item.id) ? 
                                <Button sx={{ flex: 1 }} onClick={() => handleRemove(item.id)}>
                                    <RemoveIcon fontSize={'medium'} sx={{ color: "#000", fontWeight: "bold", background: "none" }} />
                                </Button> :
                                <Button sx={{ flex: 1 }} onClick={() => handleAdd(item)}>
                                    <AddIcon fontSize={'medium'} sx={{ color: "#000", fontWeight: "bold", background: "none" }} />
                                </Button>
                            }
                            <Button sx={{ flex: 1 }} onClick={() => handleEdit(item.id)}>
                                <CreateIcon fontSize={'medium'} sx={{ color: "#000", fontWeight: "bold", background: "none" }} />
                            </Button>
                            <Button sx={{ flex: 1 }} onClick={() => handleDelete(item)}>
                                <DeleteIcon fontSize={'medium'} sx={{ color: "#000", fontWeight: "bold", background: "none" }} />
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: '100%',
                        backgroundColor: '#ffff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        color: '#EC6724',
                        border: '2px solid #EC6724',
                        boxShadow: 'none'
                    }}
                    onClick={handleAddNewUser}
                >
                    Criar cliente
                </Button>
            </Box>
        </Box>
    );
}

export default View;
