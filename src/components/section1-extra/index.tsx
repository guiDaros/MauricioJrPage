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
          QUEM É <SpanTitleSec1Extra>MAURICIO JUNIOR?</SpanTitleSec1Extra>
        </TitleSec1Extra>
        <DescriptionSec1Extra>
          <SpanDescriptionSec1Extra>Graduado</SpanDescriptionSec1Extra> em
          Educação Física.
          <br />
          <br />
          <SpanDescriptionSec1Extra>Especialista</SpanDescriptionSec1Extra>{" "}
          Pós-Graduado em Biomecânica e Reabilitação Musculoesquelética
          <br />
          <br />
          <SpanDescriptionSec1Extra>Especialista</SpanDescriptionSec1Extra>{" "}
          Pós-Graduado em Fisiologia do exercício
          <br />
          <br />
          <SpanDescriptionSec1Extra>Especialista</SpanDescriptionSec1Extra>{" "}
          Pós-Graduado em Reabilitação de Lesões e Correção Postural
          <br />
          <br />
          <SpanDescriptionSec1Extra>Mestrando</SpanDescriptionSec1Extra> em
          Envelhecimento Humano
          <br />
          <br />
          <SpanDescriptionSec1Extra>
            + de 60 cursos realizados na área
          </SpanDescriptionSec1Extra>{" "}
          realizados na área.
          <br />
          <br />
          <SpanDescriptionSec1Extra>
            Autor de 2 Livros
          </SpanDescriptionSec1Extra>{" "}
          digitais “Descomplicando a Musculação” e “Guia prático - Noções
          básicas sobre a correção postural”
          <br />
          <br />
          Conta com diversos artigos científicos publicados em revistas e
          congressos
          <br />
          <br />
          <SpanDescriptionSec1Extra>
            +150 pessoas impactadas
          </SpanDescriptionSec1Extra>
        </DescriptionSec1Extra>
      </TextMainContainer>
    </GeneralContainer>
  );
}
