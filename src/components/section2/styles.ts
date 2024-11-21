// import styled from "styled-components";
// import { Swiper } from "swiper/react";

// export const GeneralContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: transparent;
//   overflow: visible; /* Garante que nada seja cortado */
//   box-sizing: border-box;
// `;

// export const TitleSec2 = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1rem;
//   color: #fff;
// `;

// export const SpanTitleSec2 = styled.span`
//   color: #007bff;
// `;

// // Estilize o Swiper principal
// // Em styles.ts
// export const CustomSwiper = styled(Swiper)`
//   width: 100%;
//   max-width: 100%;
//   height: auto;
//   position: relative; /* Posiciona corretamente o Swiper */

//   z-index: 1; /* Coloca os slides acima de outros elementos */

//   .swiper-slide {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     background: #007bff;
//     color: #fff;
//     border-radius: 8px;
//     padding: 2rem;
//     visibility: visible; /* Força a visibilidade dos slides */
//     min-width: calc(100% / 3); /* Divide os slides igualmente */
//     flex-shrink: 0; /* Impede que os slides se ajustem */

//     transition: transform 0.3s ease, background 0.3s ease;

//     transform: none !important; /* Remove qualquer transformação incorreta */
//   }

//   .swiper-pagination-bullet {
//     background-color: #007bff;
//     opacity: 0.7;
//   }

//   .swiper-pagination-bullet-active {
//     background-color: #fff;
//     opacity: 1;
//   }

//   .swiper-button-next,
//   .swiper-button-prev {
//     color: #007bff;
//     transition: color 0.3s;
//     z-index: 10;
//     &:hover {
//       color: #fff;
//     }
//   }



//   @media (max-width: 768px) {
//     max-width: 100%; /* Ocupa toda a largura da tela */
//     height: 250px; /* Reduz altura */

//     .swiper-slide {
//       font-size: 1rem; /* Reduz o tamanho do texto */
//       padding: 1.5rem; /* Ajusta padding */
//     }
//   }

//   @media (max-width: 480px) {
//     height: 200px; /* Reduz ainda mais a altura */
//     .swiper-slide {
//       font-size: 0.9rem; /* Texto menor para telas muito pequenas */
//       padding: 1rem; /* Menor padding */
//     }
//   }
// `;


import styled from "styled-components";
import { Swiper } from "swiper/react";

// Importando os estilos básicos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Contêiner principal
export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 85vh;

  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: transparent;
  overflow: visible; /* Garante que nada seja cortado */
  box-sizing: border-box;

`;

// Título principal
export const TitleSec2 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;

  position: relative;
  top: -70px;
`;

// Span dentro do título
export const SpanTitleSec2 = styled.span`
  color: #007bff;
`;

// Estilos para o Swiper
export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden; /* Garante que nada seja cortado */
  z-index: 1;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    background: #007bff;
    color: #fff;
    border-radius: 8px;
    padding: 2rem;
    visibility: visible;
    min-width: calc(100% / 3); /* Divide os slides igualmente */
    flex-shrink: 0;

    transition: transform 0.3s ease, background 0.3s ease;
    transform: none !important; /* Remove qualquer transformação incorreta */
  }

  .swiper-pagination-bullet {
    background-color: #007bff;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #007bff;
    transition: color 0.3s ease;
    z-index: 10;

    &:hover {
      color: #fff;
    }
  }

  // Estilos para telas menores
  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;

    .swiper-slide {
      font-size: 1rem;
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    height: 200px;

    .swiper-slide {
      font-size: 0.9rem;
      padding: 1rem;
    }
  }
`;




// import styled from "styled-components";
// import { Swiper } from "swiper/react";

// // Contêiner principal
// export const GeneralContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: transparent;
//   overflow: visible; /* Garante que nada seja cortado */
//   box-sizing: border-box;
// `;

// // Título principal
// export const TitleSec2 = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1rem;
//   color: #fff;
// `;

// // Span dentro do título
// export const SpanTitleSec2 = styled.span`
//   color: #007bff;
// `;

// // Estilos para o Swiper
// export const CustomSwiper = styled(Swiper)`
//   width: 100%;
//   height: auto;
//   position: relative;
//   overflow: hidden; /* Garante que nada seja cortado */
//   z-index: 1;

//   .swiper-slide {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     background: #007bff;
//     color: #fff;
//     border-radius: 8px;
//     padding: 2rem;
//     visibility: visible;
//     min-width: calc(100% / 3); /* Divide os slides igualmente */
//     flex-shrink: 0;

//     transition: transform 0.3s ease, background 0.3s ease;
//     transform: none !important; /* Remove qualquer transformação incorreta */
//   }

//   .swiper-pagination-bullet {
//     background-color: #007bff;
//     opacity: 0.7;
//     transition: opacity 0.3s ease;
//   }

//   .swiper-pagination-bullet-active {
//     background-color: #fff;
//     opacity: 1;
//   }

//   .swiper-button-next,
//   .swiper-button-prev {
//     color: #007bff;
//     transition: color 0.3s ease;
//     z-index: 10;

//     &:hover {
//       color: #fff;
//     }
//   }

//   // Estilos para telas menores
//   @media (max-width: 768px) {
//     max-width: 100%;
//     height: 250px;

//     .swiper-slide {
//       font-size: 1rem;
//       padding: 1.5rem;
//     }
//   }

//   @media (max-width: 480px) {
//     height: 200px;

//     .swiper-slide {
//       font-size: 0.9rem;
//       padding: 1rem;
//     }
//   }
// `;
