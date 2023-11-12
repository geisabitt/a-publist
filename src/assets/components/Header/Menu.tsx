import React, { useState } from "react";
import styled from "styled-components";

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px 10px;
`;

const UlMenu = styled.ul<{ isMobile: boolean }>`
  display: flex;
  list-style-type: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobile ? "none" : "flex")};
    flex-direction: column;
    position: absolute;
    text-align: center;
    top: 100px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px;
    z-index: 1;
    & li {
      margin-bottom: 30px;
    }
  }

  & li {
    padding: 5px;
    margin-left: 21px;
  }

  & li a {
    color: #737373;
    text-decoration: none;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  align-items: center;
`;

const MobileMenuIcon = styled.img`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
const GroupIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 24px;
`;
const BrandTitle = styled.h2`
  padding: 13px 0;
`;

export const Menu: React.FC = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!MobileMenuOpen);
  };

  return (
    <>
      <NavMenu>
        <BrandTitle>Publist</BrandTitle>

        <MenuGroup>
          <UlMenu isMobile={MobileMenuOpen}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </UlMenu>
          <GroupIcons>
            <a href="#">
              <img
                src="../../../../public/icons/icon-search.svg"
                alt="icon search"
              />
            </a>
            <a href="#">
              <img
                src="../../../../public/icons/icon-cart.svg"
                alt="icon cart"
              />
            </a>
            <MobileMenuIcon
              src="../../../../public/icons/icon-navbar.svg"
              alt="icon Navbar"
              onClick={toggleMobileMenu}
            />
          </GroupIcons>
        </MenuGroup>
      </NavMenu>
    </>
  );
};

Menu.displayName = "Menu";
