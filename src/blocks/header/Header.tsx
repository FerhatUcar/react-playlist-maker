import React, { MouseEventHandler } from "react";
import { Logo } from "../../style/globalStyle";
import logo from "../../assets/images/logo.png";
import { HeaderBlock, LogoBlock, MenuBlock, MenuIcon } from "./styled";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  openMenu: MouseEventHandler<HTMLButtonElement> | undefined;
  expanded: boolean
}

export const Header = ({ openMenu, expanded }: HeaderProps): JSX.Element => {
  return (
    <HeaderBlock>
      <LogoBlock>
        <Logo src={logo} alt="logo" />
        <h1>Rockstars app</h1>
      </LogoBlock>
      <MenuBlock>
        <MenuIcon onClick={openMenu}>
          <FontAwesomeIcon icon={expanded ? faTimes : faHamburger} />
        </MenuIcon>
      </MenuBlock>
    </HeaderBlock>
  );
};
