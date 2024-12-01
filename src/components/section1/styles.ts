import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 0;
  border-bottom: #0796e3 solid 15px;
  color: #fff;

  > div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
  height: 97vh;
  }
`;

export const LeftContainer = styled.div`
  max-width: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -10%;

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

  @media (max-width: 500px) {
    max-width: 100%;

    gap: 30px;
    margin-bottom: 50px;
  }
`;
export const TextLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;

  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
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
    font-size: 50px;
    width: 300px;
  }
`;

export const SpanTitleSec1 = styled.span`
  color: #0066e8;
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
