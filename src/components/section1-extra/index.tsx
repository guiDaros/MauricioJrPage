// src/components/section1/index.tsx

import React from "react";
import {
  GeneralContainer,
  TextMainContainer,
  SpanTitleSec1Extra,
  TitleSec1Extra,
  DescriptionSec1Extra,
  SpanDescriptionSec1Extra,
} from "./styles";

export function Section1Extra() {

  return (
    <GeneralContainer>
      <TextMainContainer>
        <TitleSec1Extra>
          QUEM É <SpanTitleSec1Extra>MAURICIO JUNIOR</SpanTitleSec1Extra>
        </TitleSec1Extra>
        <DescriptionSec1Extra>
          <SpanDescriptionSec1Extra>Graduado</SpanDescriptionSec1Extra> em Educação Física.
          <br />
          <br />
          <SpanDescriptionSec1Extra>Especialista</SpanDescriptionSec1Extra> Pós-Graduado em Biomecânica,
          Reabilitação Musculoesquelética e Fisiologia do Exercício
          <br />
          <br />
          <SpanDescriptionSec1Extra>Pós-Graduando</SpanDescriptionSec1Extra> em Correção Postural e Reabilitação de Lesões.
          <br /><br /> 
          Aluno em regime especial do programa no <SpanDescriptionSec1Extra>mestrado</SpanDescriptionSec1Extra> em Envelhecimento Humano da
          Universidade de Passo Fundo.
          <br /><br />
          <SpanDescriptionSec1Extra>+ de 40 cursos</SpanDescriptionSec1Extra> realizados na área.
          <br /><br />
          <SpanDescriptionSec1Extra>Autor</SpanDescriptionSec1Extra> de 2 livros digitais “Descomplicando a Musculação” e “Guia prático - Noções
          básicas sobre Correção Postural” 
          <br /><br />
          Criador do <SpanDescriptionSec1Extra>método Núcleo de correção postural</SpanDescriptionSec1Extra> baseada em ciência e evidência.
          <br /><br />
           Diversos artigos publicados, a
          maioria em revistas científicas.
          <br /><br />
          <SpanDescriptionSec1Extra>+ de 50 pessoas impactadas</SpanDescriptionSec1Extra>
        </DescriptionSec1Extra>
      </TextMainContainer>
    </GeneralContainer>
  );
}
