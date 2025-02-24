import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import DropdownMenu from "../dropdown-menu.tsx";

interface Props {
    open: boolean;
    handleDrawerToggle: () => void;
    drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }: { theme: any; open: boolean; drawerWidth: number }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    height: "100px",
    backgroundColor: "#ffffff",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const NavBar = (props: Props) => {

    const { open, handleDrawerToggle, drawerWidth } = props;
    return (
        <AppBar position="fixed" open={open} drawerWidth={drawerWidth} theme={undefined}>
            <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                {!open && (
                    <Button onClick={handleDrawerToggle} sx={{ minWidth: "auto", padding: 0, color: "#000" }}>
                        <MenuIcon />
                    </Button>
                )}
                
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexGrow: 1,
                        flexWrap: "wrap",
                        "@media (max-width: 645px)": {
                            display: "none",
                        },
                    }}
                >
                    <img src="/images/lorem-ipsum.png" width={"110"} style={{ maxWidth: "100%", height: "auto" }} />
                    <DropdownMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
