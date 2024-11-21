// ButtonSec1.styles.ts
import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: inherit;

  border: none;
  width: 15em;
  height: 3.5rem;
  border-radius: 1.3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #0066E8;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background: linear-gradient(0deg, #3A86FF, #0A74DA);
    box-shadow: 
      inset 0px 1px 0px rgba(255, 255, 255, 0.4),
      inset 0px -4px 0px rgba(0, 0, 0, 0.2),
      0px 0px 0px 4px rgba(173, 216, 230, 0.3),
      0px 0px 180px 0px #00A3E0;
    transform: translateY(-2px);

    .text {
      color: #ffffff;
      font-family: inherit;
      font-size: 1.5rem; /* Tamanho da fonte do texto no hover */
    }
  }
`;

export const Text = styled.span`
  font-weight: 600;
  color: #ffffff;
  font-size: 1.8rem; /* Aumente o tamanho da fonte aqui também */
  transition: color 450ms ease-in-out;

  font-family: inherit;
`;
