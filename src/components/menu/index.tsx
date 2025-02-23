import * as React from "react";
import Box from "@mui/material/Box";
import SideDrawer from "./drawer";
import NavBar from "./nav-bar";

const drawerWidth = 240;

const SideMenu = () => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<Box
			sx={{
				display: "flex",
				marginBottom: "100px",
			}}
		>
			<NavBar open={open} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
			<SideDrawer open={open} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
		</Box>
	);
};

export default SideMenu;
