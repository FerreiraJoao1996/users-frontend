
import { Box, Button, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { useUserPersistStore } from '../../store/user-persist';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { formatCurrency } from '../../utils/format-currency';
import ButtonSubmit from '../buttons/button-submit';

function SelectedUsers() {
    const { removeUser, users, setUsers } = useUserPersistStore();
    const navigate = useNavigate();

    const handleRemove = (id: number) => {
        removeUser(id);
    }

    const handleClean = () => {
        setUsers([])
        navigate('/users')
    }

    useEffect(() => {
    }, [users]);

    return (
        <>
            <Typography variant="h6" fontWeight={'bold'} textAlign={'start'} mb={2}>
                Clientes Selecionados: {users.length}
            </Typography>
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
                    {users.map((item) => (
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
                            <Typography>{String(formatCurrency(item.salary))}</Typography>
                            <Typography>{String(formatCurrency(item.company_value))}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 1 }}>
                                <Button sx={{ flex: 1 }} onClick={() => handleRemove(item.id)}>
                                    <RemoveIcon fontSize={'medium'} sx={{ color: "#000", fontWeight: "bold", background: "none" }} />
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <ButtonSubmit onClick={handleClean} text={'Limpar Clientes Selecionados'} color={"#EC6724"} />
            </Box>
        </>
    );
}

export default SelectedUsers;
