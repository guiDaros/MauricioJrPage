import React from 'react';
import { FooterContainer, LeftText, RightContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      {/* Lado esquerdo: Texto de direitos reservados */}
      <LeftText>© Todos os direitos reservados</LeftText>

      {/* Lado direito: Componentes dos ícones sociais */}
      <RightContainer>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
