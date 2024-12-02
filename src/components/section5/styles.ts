// src/components/section2/styles.ts

import styled from "styled-components";

export const GeneralContainer = styled.div`
  height: 75vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  background-color: transparent;

  /* Responsividade */
  @media (max-width: 1300px) {
    gap: 100px;  // Ajuste do gap para telas menores
  }

  @media (max-width: 1000px) {
    height: 2400px;  // Ajusta a altura para telas menores
  }
`;

export const TitleSec5 = styled.h1`
  margin-top: 50px;
  font-size: 45px;
  font-weight: bold;
  text-align: center;

  color: #fff;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* Responsividade */
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

// src/components/section2/styles.ts

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100px;  /* Tamanho padrão da imagem */
    height: auto;
  }

  h2 {
    font-size: 24px;
    
    font-weight: 200;
    text-align: center;
    color: #fff;

    max-width: 150px;
    width: 150px;
  }

  /* Responsividade */
  @media (max-width: 1000px) {
    width: 100%;  /* O container vai ocupar 100% da largura */
    margin: 10px 0; /* Adiciona algum espaçamento entre os itens */

    /* Ajuste da imagem na coluna */
    img {
      width: 150px;   /* Largura da imagem */
      height: auto;  /* Altura da imagem */
    }
  }
`;
