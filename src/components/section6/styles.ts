import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 2rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  color: #fff;
`;

export const ItemGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 50px;  /* Espaçamento fixo entre os itens */
  width: 900px;  /* Largura fixa para a box maior */
  margin: 0 auto;  /* Centraliza a box */

  @media (max-width: 1500px) {
    width: 80%;  /* Diminuir a largura da grid gradualmente */
  }

  @media (max-width: 1000px) {
    flex-direction: column; /* Faz com que os cards fiquem em uma coluna */
    width: 100%;  /* A box maior toma toda a largura disponível */
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;  /* Garante que a largura máxima dos cards seja 400px */
  height: 250px;

  @media (max-width: 1500px) {
    width: 90%; /* Ajusta a largura dos cards para não ultrapassarem os limites da grid */
  }

  @media (max-width: 1200px) {
    width: 80%; /* Continua ajustando a largura dos cards */
  }

  @media (max-width: 1000px) {
    width: 100%;  /* Os cards vão ocupar toda a largura disponível em telas muito pequenas */
    max-width: 400px;  /* Garante que o card não ultrapasse os 400px de largura */
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  `;

export const ItemTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  display: flex;
  align-items: center;

  color: #fff;
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 0.5rem;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
