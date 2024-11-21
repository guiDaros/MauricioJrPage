import React from "react";
import { SectionContainer, SectionTitle, VideoContainer } from "./styles";

function Section7() {
  return (
    <SectionContainer>
      <SectionTitle>CONHEÇA O MAURICIO JR</SectionTitle>
      <VideoContainer>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/ODF7Q4Zc6eA"
          title="Descrição do vídeo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </SectionContainer>
  );
}

export default Section7;
