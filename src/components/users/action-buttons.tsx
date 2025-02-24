import { Box, Button } from '@mui/material';
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
    item: Users;
}

function ActionButtons(props: Props) {

    const{ item } = props;

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
                        removeUser(user.id);
                        refetch();
                        closeModal();
                    }
                });
            }
        });
    };


    return (
       
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
                <DeleteIcon fontSize={'medium'} sx={{ color: "#ff0000", fontWeight: "bold", background: "none" }} />
            </Button>
        </Box>
    );
}

export default ActionButtons;