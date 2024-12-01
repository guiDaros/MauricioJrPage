import React from 'react';
import { FooterContainer, LeftText, RightContainer } from './styles';

import youtubeIcon from '../../assets/footerAssets/youtube.png';
import instagramIcon from '../../assets/footerAssets/instagram.png';
import tiktokIcon from '../../assets/footerAssets/tiktok.png';

const Footer = () => {
  return (
    <FooterContainer>
      {/* Lado esquerdo: Texto de direitos reservados */}
      <LeftText>© Todos os direitos reservados</LeftText>

      {/* Lado direito: Componentes dos ícones sociais */}
      <RightContainer>
        <a href="https://www.youtube.com/@mauriciojuniortreinador" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/mauriciojuniortreinador/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@mauriciojunior_d?lang=pt-BR" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
