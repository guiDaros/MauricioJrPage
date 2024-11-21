// styles.ts
import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0066e8;
  text-align: center;
  width: 12rem;
  height: 3.7rem;
  border-radius: 1rem;
  position: relative;
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #3a86ff; /* Cor levemente mais escura */
    transform: scale(1.02); /* Aumenta levemente o tamanho */
  }

  &:active {
    transform: scale(0.98); /* Reduz levemente o tamanho ao clicar */
  }
`;

export const ButtonText = styled.p`
  text-align: center;
  color: #ffffff;
`;
