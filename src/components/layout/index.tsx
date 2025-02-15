import { useLocation } from "react-router-dom";
import SideMenu from "../menu";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
