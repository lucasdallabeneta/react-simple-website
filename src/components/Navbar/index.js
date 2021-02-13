import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks 
} from './NavbarElements';
import {animateScroll} from 'react-scroll';

function Navbar(props) {

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[])

  function changeNav () {
    if(window.scrollY >= window.innerHeight - 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  
  function toggleHome () {
    animateScroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>

          <NavLogo to='/' onClick={toggleHome}>
            logo
          </NavLogo>

          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            {
              props.links.map((link, index) => (
                <NavItem>
                  <NavLinks 
                    smooth={true} 
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-40}
                    to={link}
                  >
                    {link}
                  </NavLinks>
                </NavItem>
              ))      
            }
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;