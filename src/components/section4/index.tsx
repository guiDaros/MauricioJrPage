// src/components/section4/index.tsx
import React from "react";
import {
  AlternativePricesContainer,
  BoxImage,
  GeneralContainerSec4,
  MasterPriceContainer,
  OptionsContainer,
  TitleSec4,
} from "./styles";
import PurchaseButton from "../../atoms/PurchaseButton";  // Importando o botão com a lógica do pop-up
import SafeBuyImage from '../../assets/safeprivateguaranted.png'

export function Section4() {
  return (
    <GeneralContainerSec4 id="section4">
      <TitleSec4>Planos de Consultoria</TitleSec4>
      <OptionsContainer>
        <AlternativePricesContainer>
          <h2>Consultoria Semestral</h2>
          <p>Seis meses de evolução com treino e estratégia..</p>
          <PurchaseButton />  {/* Botão de compra com pop-up */}
          <BoxImage src={SafeBuyImage}/>
        </AlternativePricesContainer>
        <MasterPriceContainer>
          <h1>Consultoria Anual</h1>
          <p>Planejamento completo para máxima performance.</p>
          <PurchaseButton />
          <BoxImage src={SafeBuyImage}/>
        </MasterPriceContainer>
        <AlternativePricesContainer>
          <h2>Consultoria Trimestral</h2>
          <p>Orientação profissional para acelerar sua evolução.</p>
          <PurchaseButton />
          <BoxImage src={SafeBuyImage}/>
        </AlternativePricesContainer>
      </OptionsContainer>
    </GeneralContainerSec4>
  );
}
