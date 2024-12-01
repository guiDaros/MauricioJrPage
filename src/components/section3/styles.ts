import styled from "styled-components";

export const GeneralContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */
  gap: 170px;
  background-color: transparent; /* Cor de fundo, ajuste conforme necessário */
  position: relative;

  @media (max-width: 800px) {
    height:95vh; /* Permite que o container se ajuste à altura do conteúdo */
    gap: 50px; /* Reduz o espaçamento para telas menores */
  }
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
  width: auto;
  height: 350px;
  z-index: 2; /* Garante que a imagem não seja coberta */
  
  @media (max-width: 800px) {
    height: 280px; /* Reduz a altura da imagem para telas menores */
  }
`;

export const ListSec3 = styled.ul`
  width: 300px;
  height: auto; /* Ajusta a altura ao conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 20px;
  color: #ffffff;
  list-style: none;
  font-size: 1.3rem;
  position: relative;
  z-index: 3; /* Garante que a lista esteja acima */
  
  @media (max-width: 800px) {
    gap: 15px; /* Ajusta o espaçamento entre os itens para telas menores */
  }
`;

export const UnderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%; /* Garante que o contêiner ocupe toda a largura disponível */
  z-index: 2; /* Garante que o contêiner esteja acima */
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: column; /* Alinha os itens em coluna para telas menores */
    gap: 30px; /* Reduz o espaçamento para telas menores */
  }
`;
