import { useLocation } from "react-router-dom";
import SideMenu from "../menu";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {

  const{ children } = props;

  const location = useLocation();
  const showSideMenu = location.pathname !== "/";

  return (
    <Box>
      {showSideMenu && <SideMenu />}
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
