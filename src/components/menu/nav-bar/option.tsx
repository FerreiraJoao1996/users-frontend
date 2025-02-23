import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface Props {
    pathnameToRedirect: string;
    itemListName: string;
}


const Option = (props: Props) => {
    const { pathnameToRedirect, itemListName } = props;
    const location = useLocation();

    return (
        <Typography
            component={Link}
            to={pathnameToRedirect}
            sx={{
                color: location.pathname === `${pathnameToRedirect}` ? "#EC6724" : "#000",
                textDecoration: location.pathname === `${pathnameToRedirect}` ? "underline" : "none",
                fontWeight: "normal",
            }}
        >
            {itemListName}
        </Typography>
    );
};

export default Option;
