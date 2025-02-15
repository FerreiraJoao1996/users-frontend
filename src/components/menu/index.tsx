import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WindowIcon from "@mui/icons-material/Window";
import { useUserStore } from "../../store";
import { Button, Tooltip } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: { theme: any; open: boolean }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	height: '100px',
	backgroundColor: '#ffffff',
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "space-between",
}));

const SideMenu: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const location = useLocation();

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const { name } = useUserStore();
	const userName = name ?? "Usuário";

	return (
		<Box sx={{ display: "flex", marginBottom: "100px" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} theme={undefined}>
				<Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
					<Button onClick={handleDrawerToggle} sx={{ minWidth: "auto", padding: 0, color: "#000" }}>
						<MenuIcon />
					</Button>

					<Box sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexGrow: 1,
						flexWrap: "wrap",
					}}>
						<img src="public/images/teddy-logo.png" width={'180px'} style={{ maxWidth: '100%', height: 'auto' }} />

						<Box sx={{
							display: "flex",
							gap: 2,
							alignItems: "center",
							flexWrap: "wrap",
							justifyContent: "center",
						}}>
							<Typography
								component={Link}
								to="/users"
								sx={{
									color: location.pathname === "/users" ? "#EC6724" : "black",
									textDecoration: location.pathname === "/users" ? "underline" : "none",
									fontWeight: "normal",
								}}
							>
								Clientes
							</Typography>

							<Typography
								component={Link}
								to="/selected-users"
								sx={{
									color: location.pathname === "/selected-users" ? "#EC6724" : "black",
									textDecoration: location.pathname === "/selected-users" ? "underline" : "none",
									fontWeight: "normal",
								}}
							>
								Clientes Selecionados
							</Typography>

							<Typography
								component={Link}
								to="/"
								sx={{
									color: location.pathname === "/" ? "#EC6724" : "black",
									textDecoration: location.pathname === "/" ? "underline" : "none",
									fontWeight: "normal",
								}}
							>
								Sair
							</Typography>
						</Box>

						<Typography color="#000">Olá, {userName}!</Typography>
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer sx={{ width: drawerWidth, flexShrink: 0, "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" } }} variant="persistent" anchor="left" open={open}>
				<DrawerHeader
					sx={{
						backgroundColor: "#363636",
						borderTopRightRadius: "8px",
					}}
				>
					<img
						src="public/images/teddy-logo.png"
						width={"180px"}
						style={{ objectFit: "cover" }}
					/>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem disablePadding sx={{ position: "relative" }}>
						<ListItemButton component={Link} to="/" onClick={handleDrawerToggle}>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText
								primary="Home"
								sx={{
									color: location.pathname === "/" ? "#EC6724" : "black",
									textDecoration: location.pathname === "/" ? "underline" : "none",
									fontWeight: "normal",
								}}
							/>
						</ListItemButton>
						<Tooltip title="Fechar menu">
							<IconButton
								onClick={handleDrawerToggle}
								sx={{
									width:"30px",
									height: "30px",
									position: "absolute",
									top: 0,
									right: 0,
									translate: '0 -75%',
									backgroundColor: "#ffffff",
									color: "#000",
									borderRadius: "50%",
									border: "1px solid #d4d4d4",
									padding: "8px",
									"&:hover": {
										backgroundColor: "#000",
										color: "#ffffff",
									},
								}}
							>
								<ArrowBackIcon fontSize="small"/>
							</IconButton>
						</Tooltip>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemButton component={Link} to="/users" onClick={handleDrawerToggle}>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="Clientes" sx={{
								color: location.pathname === "/users" ? "#EC6724" : "black",
								textDecoration: location.pathname === "/users" ? "underline" : "none",
								fontWeight: "normal",
							}} />
						</ListItemButton>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemButton onClick={handleDrawerToggle}>
							<ListItemIcon>
								<WindowIcon />
							</ListItemIcon>
							<ListItemText primary="Produtos" sx={{
								color: location.pathname === "/products" ? "#EC6724" : "black",
								textDecoration: location.pathname === "/products" ? "underline" : "none",
								fontWeight: "normal",
							}} />
						</ListItemButton>
					</ListItem>
					<Divider />
				</List>
			</Drawer>
		</Box>
	);
};

export default SideMenu;
