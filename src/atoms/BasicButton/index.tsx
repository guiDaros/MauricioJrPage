// src/atoms/BasicButton.tsx
import React from 'react';
import { StyledButton, Text } from './styles';

interface ButtonSec1Props {
  children: React.ReactNode;
  onClick: () => void;
  "aria-label": string;
  disabled?: boolean;  // Adicionando a propriedade disabled aqui
}

const ButtonSec1 = ({ children, onClick, "aria-label": ariaLabel, disabled }: ButtonSec1Props) => {
  return (
    <StyledButton onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      <Text>{children}</Text>
    </StyledButton>
  );
};

export default ButtonSec1;
