// src/atoms/Loading/styles.ts
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0%, 100% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
`;

export const SpinnerContainer = styled.div`
  --clr: #0066e8;
  --gap: 6px;
  width: 100px;  /* Manter o tamanho fixo de 100px */
  height: 100px; /* Manter o tamanho fixo de 100px */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);

  /* Quando em layout de coluna (screen <= 1000px), rotaciona os pontos */
  @media (max-width: 1000px) {
    transform: rotate(90deg);  /* Rotaciona os pontos para ficarem de pé */

    width: 150px;  /* Manter o tamanho fixo de 100px */
    height: 150px; /* Manter o tamanho fixo de 100px */
  }
`;

export const SpinnerDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--clr);
  opacity: 0;
  animation: ${fade} 1s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.33s;
  }

  &:nth-child(3) {
    animation-delay: 0.66s;
  }

  @media (max-width: 1000px) {
    width: 22px;
    height: 22px;
  }
`;
