// src/components/section1/index.tsx

import React from 'react';
import { GeneralContainer, LeftContainer, TitleSec1, SpanTitleSec1, Description } from './styles';
import ButtonSec1 from '../../atoms/BasicButton/index';

export function Section1() {
  // Função para rolar para o final da página
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <GeneralContainer>
      <LeftContainer>
        <TitleSec1>
          NÃO É SÓ ESFORÇO, <SpanTitleSec1>MAS SIM ESFORÇO INTELIGENTE.</SpanTitleSec1>
        </TitleSec1>
        <Description>
          Resolvo suas dores através da Biomecânica
        </Description>
        <ButtonSec1 onClick={scrollToBottom} aria-label="Ir para o final da página">
          Faça parte
        </ButtonSec1>
      </LeftContainer>
      {/* A imagem é agora parte do background no GeneralContainer */}
    </GeneralContainer>
  );
}
