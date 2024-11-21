// src/atoms/PopUp/styles.ts
import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background-color: #003366; /* Azul marinho escuro */
  color: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    margin-bottom: 20px;
  }

  .form-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #ff4d4f; /* Cor do botão de fechar no hover */
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;

  p {
    font-weight: bold;
    margin-bottom: 8px;
  }

  select,
  input {
    width: 300px;
    height: 50px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const BasicButtonStyled = styled.button`
  width: 300px !important;
  height: 50px;
  background-color: #007bff; /* Cor do botão básico */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Cor do botão no hover */
  }
`;

// Centralizando o botão dentro do PopupContent
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
