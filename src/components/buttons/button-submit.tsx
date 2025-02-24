import { Button } from '@mui/material';


interface Props {
    onClick: () => void;
    text: string;
    color: string;
}

function ButtonSubmit(props: Props) {
    const { onClick, text, color } = props;

    return (
        <Button
            type="submit"
            variant="contained"
            sx={{
                width: '100%',
                backgroundColor: '#ffff',
                fontWeight: 'bold',
                textTransform: 'none',
                color: {color},
                border: `2px solid ${color}`,
                boxShadow: 'none',
                marginBottom: 2
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}

export default ButtonSubmit;