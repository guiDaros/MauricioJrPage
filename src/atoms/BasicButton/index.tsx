// ButtonSec1.tsx
import React from 'react';
import { StyledButton, Text } from './styles';

interface ButtonSec1Props {
  children: React.ReactNode;
  onClick: () => void;
  "aria-label": string;
}

const ButtonSec1 = ({ children, onClick, "aria-label": ariaLabel }: ButtonSec1Props) => {
  return (
    <StyledButton onClick={onClick} aria-label={ariaLabel}>
      <Text>{children}</Text>
    </StyledButton>
  );
};

export default ButtonSec1;
