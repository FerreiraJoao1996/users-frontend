import { Box, Typography } from '@mui/material';
import { Users } from './dto/users';
import { formatCurrency } from '../../utils/format-currency';
import ActionButtons from './action-buttons';

interface Props {
    data: Users[];
}

function UserBox(props: Props) {

    const { data } = props;

    return (
        <Box
            mb={2}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'space-between',
            }}
        >
            {data.map((item: Users) => (
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
                    <Typography><strong>{item.name}</strong></Typography>
                    <Typography>Salário: {String(formatCurrency(item.salary))}</Typography>
                    <Typography mb={2}>Empresa: {String(formatCurrency(item.company_value))}</Typography>
                    <ActionButtons item={item} />
                </Box>
            ))}
        </Box>
    );
}

export default UserBox;