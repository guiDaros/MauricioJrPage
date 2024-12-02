// src/components/section3/index.tsx

import React from "react";
import { GeneralContainer, ImageSec3, ListSec3, TitleSec3, UnderTitleContainer } from "./styles";

import image from "../../assets/Sec3Img.png";
import image2 from '../../assets/check.png'

export function Section3() {
  return (
    <GeneralContainer>
      <TitleSec3>O QUE VOCÊ VAI RECEBER</TitleSec3>
      <UnderTitleContainer>
        <ImageSec3 src={image}></ImageSec3>
        {/* Você pode adicionar qualquer conteúdo aqui */}
        <ListSec3>
          <li><img src={image2}/>Treino Individualizado e Personalizado.</li>
          <li><img src={image2}/>Correção de Movimentos.</li>
          <li><img src={image2}/>Avaliação Funcional e Correção Postural.</li>
          <li><img src={image2}/>Reabilitação de Dores ou Lesões.</li>
          <li><img src={image2}/>Acesso ao Aplicativo Próprio.</li>
          <li><img src={image2}/>Acompanhamento Direto pelo WhatsApp por Profissional Especializado.</li>
        </ListSec3>
      </UnderTitleContainer>
    </GeneralContainer>
  );
}
