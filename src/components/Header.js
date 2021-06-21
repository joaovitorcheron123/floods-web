import React from "react";

import { HeaderAvatar, HeaderRight, HeaderLeft, HeaderContainer, Name, Status } from "../styles/Header.style";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}>
        </HeaderAvatar>
        <Name>
          <h3>
            {user?.displayName}
          </h3>
        </Name>
        <Status>
          <h3>
            <FiberManualRecordIcon />
            Online
          </h3>
        </Status>
      </HeaderLeft>
      <HeaderRight>
        <HelpOutlineIcon/>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;