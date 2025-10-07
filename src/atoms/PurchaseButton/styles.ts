import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0066e8;
  border: none;
  border-radius: 0.5rem; /* leve arredondamento */
  cursor: pointer;
  width: 170px;
  max-width:200px;
  height: 45px;

  &:hover {
    background-color: #3a86ff;
  }
`;

export const ButtonText = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  width: 170px;
  margin: 0;
  line-height: 1;
`;
