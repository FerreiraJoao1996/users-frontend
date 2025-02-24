import { Select, MenuItem, SelectChangeEvent } from '@mui/material';


interface Props {
    itemsPerPage: number;
    values: number[];
    onClick: (event: SelectChangeEvent<number>) => void;
}

function ItemsPerPageSelect(props: Props) {
    const { itemsPerPage, values, onClick } = props;

    return (
        <Select
            sx={{
                width: '75px',
                height: "30px",
            }}
            value={itemsPerPage}
            onChange={onClick}
        >
            {values.map((value: number) => (
                <MenuItem value={value}>{value}</MenuItem>
            ))}
        </Select>
    );
}

export default ItemsPerPageSelect;