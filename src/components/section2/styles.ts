import styled from "styled-components";
import { Swiper } from "swiper/react";

// Contêiner principal
export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  width: 100%;
  height: 85vh;
  max-width: 1100px; /* Tamanho máximo fixo */
  margin: 0 auto;
  padding: 2rem;
  background-color: transparent;
  box-sizing: border-box;

  @media (max-width: 500px) {
  height: 700px;

  gap: 80px;
  }
`;

// Título da seção
export const TitleSec2 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center; /* Centraliza o texto */
  margin-bottom: 1rem;
  color: #fff;
  text-transform: uppercase;
`;

// CustomSwiper
export const CustomSwiper = styled(Swiper)`
  width: 100%;
  position: relative;

  .swiper-wrapper {
    display: flex;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    z-index: 10;
  }
`;

// Wrapper para os slides
export const SlidesWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

// Card de cada slide
export const SlideCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 320px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem dentro do container */
  }
`;

