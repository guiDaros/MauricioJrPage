import React from "react";
import { SectionContainer, SectionTitle, VideoContainer } from "./styles";
import ButtonSec1 from "../../atoms/BasicButton/index.jsx";

function Section7() {
  const handleScrollToSection4 = () => {
    const section4 = document.getElementById("section4"); // Encontra a Seção 4 pelo ID
    if (section4) {
      section4.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até ela
    }
  };

  return (
    <SectionContainer>
      <SectionTitle></SectionTitle>
      <VideoContainer>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/ADS8q-9R8n8"
          title="Descrição do vídeo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <ButtonSec1
        onClick={handleScrollToSection4} // Passa a função ao botão
        aria-label="Ir para a Seção 4" // Adicione o atributo exigido
      >
        Comece sua evolução <span>agora!</span>
      </ButtonSec1>
    </SectionContainer>
  );
}

export default Section7;
