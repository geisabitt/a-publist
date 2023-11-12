import React from "react";
import styled from "styled-components";

const NavMenu = styled.nav`
  display: flex;
`;

export const Menu: React.FC = () => {
  return (
    <NavMenu>
      <h1>Publist</h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>search-icon</li>
        <li>cart-icon</li>
      </ul>
      <p>menu-icon</p>
    </NavMenu>
  );
};
Menu.displayName = "Menu";
