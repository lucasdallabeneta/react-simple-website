import React from 'react';
import * as S from './FooterElements';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {animateScroll} from 'react-scroll';

const Footer = () => {

  function toggleHome () {
    animateScroll.scrollToTop();
  }

  return (
   <S.FooterContainer>
     <S.FooterWrap>
       <S.FooterLinkContainer>

         <S.FooterLinksWrapper>
           <S.FooterLinkItems>
             <S.FooterLinkTitle>Title</S.FooterLinkTitle>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
           </S.FooterLinkItems>
           <S.FooterLinkItems>
             <S.FooterLinkTitle>Title</S.FooterLinkTitle>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
           </S.FooterLinkItems>
         </S.FooterLinksWrapper>

         <S.FooterLinksWrapper>
           <S.FooterLinkItems>
             <S.FooterLinkTitle>Title</S.FooterLinkTitle>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
           </S.FooterLinkItems>
           <S.FooterLinkItems>
             <S.FooterLinkTitle>Title</S.FooterLinkTitle>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
             <S.FooterLink to='/'>Links</S.FooterLink>
           </S.FooterLinkItems>
         </S.FooterLinksWrapper>

       </S.FooterLinkContainer>

      <S.SocialMedia>
        <S.SocialMediaWrap>

          <S.SocialLogo to='/' onClick={() => toggleHome()}>
            logo
          </S.SocialLogo>

          <S.WebSiteRights>
            empresa © {new Date().getFullYear()} Todos os direitos reservados.
          </S.WebSiteRights>

          <S.SocialIcons>
            <S.SocialIconsLink  href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </S.SocialIconsLink>

            <S.SocialIconsLink  href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </S.SocialIconsLink>

            <S.SocialIconsLink  href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </S.SocialIconsLink>

            <S.SocialIconsLink  href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </S.SocialIconsLink>
          </S.SocialIcons>

        </S.SocialMediaWrap>
      </S.SocialMedia>

     </S.FooterWrap>
   </S.FooterContainer>
  )
}

export default Footer;