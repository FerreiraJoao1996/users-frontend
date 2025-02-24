import { Box, Pagination } from '@mui/material';
import { Users } from '../users/dto/users';

interface Props {
    data: Users[];
    itemsPerPage: number;
    currentPage: number;
    OnClick: (_event: React.ChangeEvent<unknown>, value: number) => void;
}

function PaginationComponent(props: Props) {

    const { OnClick, data, itemsPerPage, currentPage } = props;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center"
            }}
        >
            <Pagination
                sx={{
                    "& .MuiPaginationItem-root.Mui-selected": { 
                        backgroundColor: "#EC6724",
                        color: "#ffffff"
                    }
                }}
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage}
                onChange={OnClick}
                shape="rounded"
            />
        </Box>
    );
}

export default PaginationComponent;