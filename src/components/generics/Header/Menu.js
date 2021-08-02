import React from "react";
import MenuLink from "./MenuLink";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-items">
        <MenuLink link={'/'}>Home</MenuLink>
        <MenuLink link={'/market'}>Market PLace</MenuLink>
        <MenuLink link={'/wallet'}>Wallet Balance</MenuLink>
        <MenuLink link={'/drops'}>Drops</MenuLink>
        <MenuLink link={'/account'}>Account</MenuLink>
      </ul>
    </nav>
  );
};

export default Menu;
