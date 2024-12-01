import styled from "styled-components";

export const GeneralContainerSec4 = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */
  padding: 2rem; /* Espaçamento interno */
  background-color: transparent; /* Cor de fundo, ajuste conforme necessário */

  @media (max-width: 1050px) {
    height: 170vh;
  }
`;

export const TitleSec4 = styled.h1`
  font-size: 50px; /* Tamanho da fonte ajustado corretamente */
  font-weight: bold; /* Negrito */
  text-align: center; /* Centraliza o texto */
  margin-bottom: 1rem; /* Espaço abaixo do título */
  color: #fff;
  line-height: 1.1; /* Ajuste no line-height para evitar sobreposição */
  white-space: nowrap; /* Impede quebra de linha, se necessário */
  overflow: hidden; /* Oculta qualquer conteúdo que ultrapasse o contêiner */
  text-overflow: ellipsis; /* Adiciona '...' se o conteúdo for muito grande */
`;

export const OptionsContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  /* Responsividade */
  @media (max-width: 1300px) {
    gap: 80px; /* Diminuir o espaço entre os itens */
  }

  @media (max-width: 1050px) {
    flex-direction: column; /* Mudar para coluna */
    gap: 40px; /* Diminuir o espaço entre os itens quando em coluna */
  }
`;


export const AlternativePricesContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid #007bff;
  border-radius: 5px;

  height: 300px;
  width: 250px;

  color: #fff;
  padding: 1rem; /* Adicionar espaçamento interno */

  h2 {
    margin-top: auto; /* Move o texto para a metade superior */
  }

  button {
    margin-top: auto; /* Garante que o botão fique na parte de baixo */
    margin-bottom: 5px; /* Espaçamento de 5px acima da imagem */
  }

  @media (max-width: 1050px) {
    height: 350px;
    width: 280px;
  }

  @media (max-width: 350px) {
    height: 380px;
    width: 85vw;
  }
`;

export const MasterPriceContainer = styled(AlternativePricesContainer)`
  height: 380px;
  width: 280px;

  @media (max-width: 1050px) {
    height: 420px;
    width: 320px;
  }

  @media (max-width: 350px) {
    height: 400px;
    width: 90vw;
  }
`;

export const BoxImage = styled.img`
  margin-top: auto; /* Garante que a imagem fique na parte inferior da box */
  height: 25px;
`;
