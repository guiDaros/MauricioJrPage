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
      <TitleSec4>Title example</TitleSec4>
      <OptionsContainer>
        <AlternativePricesContainer>
          <h2>Consultoria Semestral</h2>
          <PurchaseButton />  {/* Botão de compra com pop-up */}
          <BoxImage src={SafeBuyImage}/>
        </AlternativePricesContainer>
        <MasterPriceContainer>
          <h1>Consultoria Anual</h1>
          <PurchaseButton />
          <BoxImage src={SafeBuyImage}/>
        </MasterPriceContainer>
        <AlternativePricesContainer>
          <h2>Consultoria Trimestal</h2>
          <PurchaseButton />
          <BoxImage src={SafeBuyImage}/>
        </AlternativePricesContainer>
      </OptionsContainer>
    </GeneralContainerSec4>
  );
}
