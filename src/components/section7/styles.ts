import styled from 'styled-components';



export const SectionContainer = styled.section`
  padding: 2rem;
  text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 50px;

   @media (max-width: 1050px) {
    height: 600px;
    
  }
`;

export const SectionTitle = styled.h2`
  font-size: 45px;
  margin-bottom: 1.5rem;

  color: #fff;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;  /* Define a largura máxima para o container do vídeo */
  margin: 0 auto;  /* Centraliza o container */
  height: auto;

  iframe {
    width: 100%;
    height: 400px;  /* Altura padrão do vídeo */
    border-radius: 8px;  /* Bordas arredondadas para o iframe */
  }

  @media (max-width: 900px) {
    iframe {
      height: 250px;  /* Ajusta a altura do vídeo para telas menores */
    }
  }
`;


