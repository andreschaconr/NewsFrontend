import styled from 'styled-components';
import { SiLogitech } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles'


export const Nav = styled.nav`
background: linear-gradient(90deg, rgba(113,154,63,1) 0%, rgba(196,217,96,1) 40%, rgba(196,217,96,1) 63%, rgba(113,154,63,1) 100%);
height: 80px;
display: flex;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 999;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

@media screen and (max-width: 960px){
  background: linear-gradient(90deg, rgba(113,154,63,1) 0%, rgba(196,217,96,1) 80%, rgba(113,154,63,1) 100%);
}
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
justify-self: flex-start;
cursor: pointer;
width: 15%;
display: block;
padding: 1rem;
display: flex;
align-items: center;

@media screen and (max-width: 960px) {
  width: 50%;
  padding: 0.3rem;
}
`;


export const NavIcon = styled(SiLogitech)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91vh;
  position: absolute;
  top: 80px;
  left: ${({click}) => (click ? 0 : '-100%') };
  opacity: 1;
  transition: all 0.5s ease;
  background: #c4d960;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
  border-bottom: 3px solid #009688;
}

@media screen and (max-width: 960px) {
  width: 100%;

  &:hover{
    border-bottom: none;
  }
}
`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;

  &:hover{
    color: #009688;
    transition: all 0.3s ease;
  }
}
`;

export const NavItemBtn =styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px; 
}
`;


export const Form =styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 820px) {
  flex-direction: column;
  width: 80%;
  padding-top: 80px;
}
`;

export const FormInput =styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;

&::placeholder{
  color: #242424;
}

@media screen and (max-width: 820px) {
  width: 100%;
  margin: 0 0 16px 0;
}
`;
