import React from 'react';
import { SectionContainer, SectionTitle, ItemGrid, ItemCard, Icon, ItemTitle, ItemDescription, ItemHeader } from './styles';
import fstImage from '../../assets/coments/3rd.png'
import sndImage from '../../assets/coments/snd.png'
import trdImage from '../../assets/coments/trd.png'

function Section6() {
  return (
    <SectionContainer>
      <SectionTitle>O título principal da seção</SectionTitle>
      <ItemGrid>
        <ItemCard>
          <Icon src={fstImage} alt="Imagem 1" />
        </ItemCard>
        <ItemCard>
          <Icon src={sndImage} alt="Imagem 2" />
        </ItemCard>
        <ItemCard>
          <Icon src={trdImage} alt="Imagem 3" />
        </ItemCard>
        <ItemCard>
          <Icon src="caminho-da-imagem-4" alt="Imagem 4" />
        </ItemCard>
      </ItemGrid>
    </SectionContainer>
  );
}

export default Section6;
