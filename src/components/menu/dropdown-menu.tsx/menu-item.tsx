import MenuItem from '@mui/material/MenuItem';

interface Props {
    onClick: () => void;
    children: React.ReactNode;
    text: string;
}

const DropdownItem = (props: Props) => {

    const { onClick , children, text } = props;
  
  return (
    <MenuItem onClick={onClick}>
        {children} {text}
    </MenuItem>
  )
       
}

export default DropdownItem; 
