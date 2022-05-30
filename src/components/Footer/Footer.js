import React from 'react';
import { FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  

 } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Suscribete a nuestro portal para mas noticias
        </FooterSubHeading>
        <FooterSubText>
          By Andrés Chacón 2022
        </FooterSubText>
      
      </FooterSubscription>
     
    </FooterContainer>
  )
}

export default Footer;
