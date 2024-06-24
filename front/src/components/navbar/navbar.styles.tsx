import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavWrapperProps {
    open?: boolean;
  }

export const NavbarContainer = styled.nav`
  display: flex;
gap: 30px;
  align-items: center;
  background-color: black;
  padding: 1rem 7rem;
  color: white;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
    }

    @media (max-width: 1120px) {
        padding: 20px;
    }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;
  flex: 3rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-right: 0.5rem;
  width: 100%;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SearchButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

export const NavWrapper = styled.div<NavWrapperProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

`;

export const NavLink = styled.li`
  font-size: 20px; 
  a {
    color: white; 
    text-decoration: none; 
    transition: color 0.3s ease; 
    &:hover {
      color: #ccc;  
    }
} 

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const LogoWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 40px;

  @media (max-width: 768px) {
    display: block;
    order: 2; 
  }
  
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem; 
  
  @media (max-width: 768px) {
    margin-left: 0;
    order: 1; 
  }
`;

export const IconLink = styled.a`
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 2rem;
  &:hover {
    color: #ccc;
  }
`;