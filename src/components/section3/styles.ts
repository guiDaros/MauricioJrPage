// src/components/section3/styles.ts

import styled from "styled-components";

export const GeneralContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */

  gap: 170px;

  background-color: transparent; /* Cor de fundo, ajuste conforme necessário */
  position: relative; /* Para o ::before funcionar no container */
`;

export const TitleSec3 = styled.h1`
  font-size: 2rem; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  text-align: center; /* Centraliza o texto */
  margin-bottom: 1rem; /* Espaço abaixo do título */
  color: #fff;
  z-index: 2; /* Garante que o título esteja acima de tudo */
`;

export const ImageSec3 = styled.img`
  width: 300px;
  height: 300px;
  z-index: 2; /* Garante que a imagem não seja coberta pelo gradiente */
`;

export const ListSec3 = styled.ul`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  color: #ffffff;
  list-style: none;
  font-size: 1.3rem;
  position: relative;
  z-index: 3; /* Garante que a lista esteja acima do gradiente */
`;

export const UnderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%; /* Garante que o contêiner ocupe toda a largura disponível */
  z-index: 2; /* Garante que o contêiner esteja acima do gradiente */
`;

// Gradiente aplicado no fundo, em todo o container
export const BackgroundGradient = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, hsla(203, 100%, 50%, 1) 0%, hsla(238, 100%, 11%, 1) 74%);
  background: -moz-radial-gradient(circle, hsla(203, 100%, 50%, 1) 0%, hsla(238, 100%, 11%, 1) 74%);
  background: -webkit-radial-gradient(circle, hsla(203, 100%, 50%, 1) 0%, hsla(238, 100%, 11%, 1) 74%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#009DFF", endColorstr="#000239", GradientType=1 );
  z-index: -1; /* Coloca o gradiente atrás de tudo */
`;
