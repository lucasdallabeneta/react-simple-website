import React from 'react';
import {
   SidebarContainer, 
   Icon, 
   CloseIcon, 
   SidebarWrapper, 
   SidebarMenu, 
   SidebarLink,
} from './SidebarElements';

function Sidebar(props) {
  return (
    <>
      <SidebarContainer isOpen={props.isOpen}>

        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            {
              props.links.map((link) => (
                <SidebarLink to={link} onClick={props.toggle}>
                  {link}
                </SidebarLink>
              ))      
            }
          </SidebarMenu>
        </SidebarWrapper>
        
      </SidebarContainer>
    </>
  )
}

export default Sidebar;