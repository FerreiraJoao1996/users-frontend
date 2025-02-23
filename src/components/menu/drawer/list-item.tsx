import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
    pathnameToRedirect: string;
    icon: React.ReactNode;
    itemListName: string;
}

const ItemList = (props: Props) => {
    const { pathnameToRedirect, children, icon, itemListName } = props;
    const [open, setOpen] = React.useState<boolean>(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <ListItem disablePadding sx={{ position: "relative" }}>
            <ListItemButton component={Link} to={pathnameToRedirect} onClick={handleDrawerToggle}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={itemListName}
                    sx={{
                        color: location.pathname === `${pathnameToRedirect}` ? "#EC6724" : "#000",
                        textDecoration: location.pathname === `${pathnameToRedirect}` ? "underline" : "none",
                        fontWeight: "normal",
                    }}
                />
            </ListItemButton>
            {children}
        </ListItem>
    );
};

export default ItemList;
