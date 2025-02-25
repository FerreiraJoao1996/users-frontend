import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from "@mui/icons-material/Person";
import { Tooltip } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ItemList from "./list-item";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
}));

interface Props {
    open: boolean;
    handleDrawerToggle: () => void;
    drawerWidth: number;
}

const SideDrawer = (props: Props) => {

    const { open, handleDrawerToggle, drawerWidth } = props;

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader
                sx={{
                    backgroundColor: "#EC6724",
                    borderTopRightRadius: "15px",
                    border: "none"
                }}
            >
                <Tooltip title="Fechar menu">
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            width: "30px",
                            height: "30px",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            backgroundColor: "#ffffff",
                            color: "#EC6724",
                            borderRadius: "50%",
                            border: "1px solid #d4d4d4",
                            padding: "8px",
                            "&:hover": {
                                backgroundColor: "#EC6724",
                                color: "#ffffff",
                            },
                        }}
                    >
                        <ArrowBackIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <img
                    src="public/images/lorem-ipsum.png"
                    width={"180px"}
                    style={{ objectFit: "cover", margin: "0 auto" }}
                />
            </DrawerHeader>
            <Divider />
            <List>
                <ItemList
                    pathnameToRedirect={'/users'}
                    icon={<PersonIcon />}
                    itemListName={"Clientes"}
                />
                <Divider />
                <ItemList
                    pathnameToRedirect={'/selected-users'}
                    icon={<GroupIcon />}
                    itemListName={"Selecionados"}
                />
                <Divider />
            </List>
        </Drawer>
    );
};

export default SideDrawer;
