// src/components/section1/index.tsx

import React from "react";
import {
  GeneralContainer,
  LeftContainer,
  TitleSec1,
  SpanTitleSec1,
  Description,
  RightContainer,
  TextLeftContainer,
} from "./styles";
import ButtonSec1 from "../../atoms/BasicButton/index";
import profilePic from "../../assets/sec1assets/capa.png";

export function Section1() {
  // Função para rolar para o final da página
  const handleScrollToSection4 = () => {
    const section4 = document.getElementById("section4"); // Encontra a Seção 4 pelo ID
    if (section4) {
      section4.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até ela
    }
  };

  return (
    <GeneralContainer>
      <LeftContainer>
        <TextLeftContainer>
          <TitleSec1>
            ALIANDO A <SpanTitleSec1>CIÊNCIA</SpanTitleSec1> AO TREINAMENTO.
          </TitleSec1>
          <Description>Resolvo suas dores através da Biomecânica</Description>
        </TextLeftContainer>
        <ButtonSec1
          onClick={handleScrollToSection4}
          aria-label="Ir para o final da página"
        >
          Faça parte
        </ButtonSec1>
      </LeftContainer>
      <RightContainer>
        <img src={profilePic} alt="" />
      </RightContainer>
    </GeneralContainer>
  );
}
