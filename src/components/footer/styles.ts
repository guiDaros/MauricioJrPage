import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20vw;

  background-color: #0096f2; /* Azul escuro */
  padding: 20px;
  color: white;
  font-size: 14px;
  width: 100%;
  position: relative;
  bottom: 0;
  height: 80px;
`;

export const LeftText = styled.div`
  font-size: 14px;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
