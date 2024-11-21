// src/components/section3/index.tsx

import React from "react";
import { GeneralContainer, ImageSec3, ListSec3, TitleSec3, UnderTitleContainer } from "./styles";

import image from "../../assets/Sec3Img.png";
import image2 from '../../assets/check.png'

export function Section3() {
  return (
    <GeneralContainer>
      <TitleSec3>O QUE VOCE IRA RECEBER</TitleSec3>
      <UnderTitleContainer>
        <ImageSec3 src={image}></ImageSec3>
        {/* Você pode adicionar qualquer conteúdo aqui */}
        <ListSec3>
          <li><img src={image2}/> Benefício 1</li>
          <li><img src={image2}/> Benefício 2</li>
          <li><img src={image2}/> Benefício 3</li>
          <li><img src={image2}/> Benefício 4</li>
          <li><img src={image2}/> Benefício 5</li>
          <li><img src={image2}/> Benefício 6</li>
        </ListSec3>
      </UnderTitleContainer>
    </GeneralContainer>
  );
}
