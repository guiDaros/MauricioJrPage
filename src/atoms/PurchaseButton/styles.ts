import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0066e8;
  border: none;
  border-radius: 0.5rem; /* leve arredondamento */
  padding: 1rem 2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: background-color 0.2s ease, transform 0.1s ease;
  width: fit-content; /* se ajusta ao texto */
  min-width: 12rem;
  height: 3.5rem;

  &:hover {
    background-color: #3a86ff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  white-space: nowrap; /* evita quebra de linha */
`;
