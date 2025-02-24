import React, { useState } from 'react';
import { Box, Typography, SelectChangeEvent } from '@mui/material';
import { Users } from './dto/users';
import { UseFormReturn } from 'react-hook-form';
import { useUserStore } from '../../store';
import ButtonSubmit from '../global/buttons/button-submit';
import UserBox from './user';
import ItemsPerPageSelect from '../global/selects/item-per-page';
import PaginationComponent from '../global/pagination';

interface Props {
    data: Users[];
    form: UseFormReturn<Users>;
    onSubmit: (data: Users) => void;
}

function View(props: Props) {
    const { data } = props;
    const { setModalOpen, setMode } = useUserStore();

    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);

    const handleAddNewUser = () => {
        setModalOpen(true);
        setMode('create');
    };

    const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setItemsPerPage(value);
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent:"space-between",
                    alignItems: "center",
                    '@media (max-width: 645px)': {
                        flexWrap: 'wrap',
                    },
                }}
            >
                <Typography 
                    variant="h6" 
                    textAlign={'start'} 
                    mb={2}
                >
                    <strong>{currentItems.length}</strong> Clientes encontrado(s)
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h6" textAlign={'start'} mb={2}>
                        Clientes por página:&nbsp;
                    </Typography>
                    <ItemsPerPageSelect itemsPerPage={itemsPerPage} values={[8,16,24]} onClick={handleItemsPerPageChange} />
                </Box>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
                <UserBox data={currentItems}/>
                <ButtonSubmit onClick={handleAddNewUser} text={'Criar Cliente'} color={"#EC6724"} />
                <PaginationComponent data={data} itemsPerPage={itemsPerPage} currentPage={currentPage} OnClick={handlePageChange} />
            </Box>
        </>
    );
}

export default View;