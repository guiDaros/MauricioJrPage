import React from 'react';
import { SpinnerContainer, SpinnerDot } from './styles';

const Loading = () => {
  return (
    <SpinnerContainer>
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </SpinnerContainer>
  );
};

export default Loading;
