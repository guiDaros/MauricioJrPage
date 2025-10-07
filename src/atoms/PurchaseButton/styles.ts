// styles.ts
import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #0066e8;
  width: 15rem;
  height: 4.7rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #3a86ff;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.p`
  text-align: center;
  color: #ffffff;
  margin-bottom: 0;
  line-height: 1; 
`;
