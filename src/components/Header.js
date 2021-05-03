import React from 'react';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { HeaderContainer, HeaderAvatar, HeaderLeft, HeaderRight, HeaderSearch } from './Header.style';

function Header() {
  return <HeaderContainer>
    <HeaderLeft>
      <HeaderAvatar />
      <AccessTimeIcon />
    </HeaderLeft>

    <HeaderSearch>
      <SearchIcon />
      <input placeholder="Buscar" />
    </HeaderSearch>

    <HeaderRight>
      <HelpOutlineIcon />
    </HeaderRight>

  </HeaderContainer>
}

export default Header;