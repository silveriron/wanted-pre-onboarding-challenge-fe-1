import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { removeToken } from "../../lib/api/getToken";

const Nav = styled.nav`
  position: absolute;
  top: 0px;
  width: 100vw;
  padding: 20px;
`;

const NavBar = () => {
  return (
    <Nav>
      <IconButton sx={{ right: -300 }} onClick={removeToken}>
        <LogoutIcon />
      </IconButton>
    </Nav>
  );
};

export default NavBar;
