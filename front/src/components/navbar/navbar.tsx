"use client";
import React, { useState, useEffect } from 'react';
import { NavbarContainer, SearchBar, SearchInput, SearchButton, NavWrapper, SearchWrapper, NavLinks, NavLink, LogoWrapper, HamburgerMenu, IconContainer, IconLink, SearchButtonIcon } from './navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MyDropdown from './dropdown';

const Navbar: React.FC = () => {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar el estado de autenticación del usuario al cargar el componente
    const userSessionString = localStorage.getItem('userSession');
    const userSession = userSessionString ? JSON.parse(userSessionString) : null;

    setIsLoggedIn(!!userSession?.token);
  }, [pathName]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <LogoWrapper>
        <img src="/logo.jpg" width="100px" alt="Logo blacktech" />
        <HamburgerMenu onClick={toggleMenu}>&#9776;</HamburgerMenu>
      </LogoWrapper>
      <NavWrapper open={isOpen}>
        <NavLinks>
          <NavLink>
            <Link href="/">Inicio</Link>
          </NavLink>
          <NavLink>
            <Link href="/product">Productos</Link>
          </NavLink>
          <NavLink>
            <MyDropdown />
          </NavLink>
          <NavLink>
            <Link href="/about">Acerca de</Link>
          </NavLink>

          {isLoggedIn ?
            <NavLink>
              <Link href="/newComponent">nuevo componente</Link>
            </NavLink>
            : null}


        </NavLinks>
        <SearchWrapper>
          <SearchBar>
            <SearchInput type="text" placeholder="Buscar..." />
            <SearchButton>
              <SearchButtonIcon icon={faSearch} />
            </SearchButton>
          </SearchBar>
          <IconContainer>
            <IconLink href="/cart">
              <FontAwesomeIcon style={{ width: '26px' }} icon={faShoppingCart} />
            </IconLink>
            <IconLink href={isLoggedIn ? '/dashboard' : '/login'}>
              <FontAwesomeIcon style={{ width: '26px' }} icon={faUserCircle} />
            </IconLink>
          </IconContainer>
        </SearchWrapper>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;