import React from 'react';
import { BottomContainer, GeneralContainer, ItemContainer, TitleSec5 } from './styles';
import image1 from '../../assets/sec5assets/1.png';
import image2 from '../../assets/sec5assets/2.png';
import image3 from '../../assets/sec5assets/3.png';
import image4 from '../../assets/sec5assets/4.png';
import image5 from '../../assets/sec5assets/5.png';

import Loading from '../../atoms/Loading'; // Aqui você importa o componente de Loading

export function Section5() {
  return (
    <GeneralContainer>
      <TitleSec5>COMO FUNCIONA A CONSULTORIA</TitleSec5>
      <BottomContainer>
        {/* Exibição das imagens com o componente de Loading entre elas */}
        <ItemContainer>
          <img src={image1} alt="Imagem 1 da Consultoria" />
          <h2>Confirmação de compra</h2>
        </ItemContainer>
        <Loading />  {/* Componente de Loading entre as imagens */}
        
        <ItemContainer>
          <img src={image2} alt="Imagem 2 da Consultoria" />
          <h2>Definir a data de inicio</h2>
        </ItemContainer>
        <Loading />

        <ItemContainer>
          <img src={image3} alt="Imagem 3 da Consultoria" />
          <h2>Responder Formulários</h2>
        </ItemContainer>
        <Loading />

        <ItemContainer>
          <img src={image4} alt="Imagem 4 da Consultoria" />
          <h2>Enviar as fotos avaliativas</h2>
        </ItemContainer>
        <Loading />

        <ItemContainer>
          <img src={image5} alt="Imagem 5 da Consultoria" />
          <h2>Receber os protocolos</h2>
        </ItemContainer>
      </BottomContainer>
    </GeneralContainer>
  );
}
