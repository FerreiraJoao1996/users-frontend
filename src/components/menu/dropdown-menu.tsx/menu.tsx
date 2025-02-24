import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import DropdownItem from './menu-item';

interface Props {
    handleClose: () => void;
    anchorEl: HTMLElement | null;
    open: boolean;
}

const ListItemMenu = (props: Props) => {

    const {anchorEl, open, handleClose} = props;

  return (
      <Menu
        anchorEl={anchorEl}
        id="dropdownmenu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <DropdownItem onClick={handleClose} children={<Avatar />} text={'Perfil'} />
        <Divider />
        <DropdownItem onClick={handleClose} children={<Logout fontSize="small" />} text={'Sair'} />
      </Menu>
  );
}

export default ListItemMenu; 
