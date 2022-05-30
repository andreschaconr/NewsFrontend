
import { IconContext } from 'react-icons/lib';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  

} from './Navbar.elements';


export const Navbar = () => {
  


  
  
  
  
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}} >
      <Nav>
        <NavbarContainer>
            <NavLogo to="/" >
              <img src={require('../../images/news.svg').default} alt="Logo" />
            </NavLogo>
          
            
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;