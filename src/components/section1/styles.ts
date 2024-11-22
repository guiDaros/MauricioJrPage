
import styled from 'styled-components';

export const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  border-bottom: #0796e3 solid 15px;
  color: #fff;

  /* Background padrão (ultrawide) */
  background: transparent;

  /* Alteração para o background padrão em telas menores */
  @media (max-width: 1600px) {

  }

  /* Alteração para o background mobile em telas muito pequenas */
  @media (max-width: 768px) {

  }

  /* Estilo do conteúdo real */
  > div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  max-width: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -30%;

  @media (max-width: 1000px) {
    max-width: 80%;
    align-items: center;
    text-align: center;
    margin-left: 0;
  }

  @media (max-width: 750px) {
    max-width: 90%;
    padding: 1rem;
  }

  @media (max-width: 390px) {
    max-width: 100%;
  }
`;

export const TitleSec1 = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #fff;

  @media (max-width: 1000px) {
    font-size: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 3rem;
  }

  @media (max-width: 390px) {
    font-size: 30px;
  }
`;

export const SpanTitleSec1 = styled.span`
  color: #0066E8;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
`;
