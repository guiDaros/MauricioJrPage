import React from 'react';
import { SectionContainer, SectionTitle, ItemGrid, ItemCard, Icon, ItemTitle, ItemDescription, ItemHeader } from './styles';
import firstImage from '../../assets/coments/3rd.png'
import secondImage from '../../assets/coments/snd.png'
import thirdImage from '../../assets/coments/trd.png'
import fourthImage from '../../assets/coments/4.png'

function Section6() {
  return (
    <SectionContainer>
      <SectionTitle>O que estão dizendo?</SectionTitle>
      <ItemGrid>
        <ItemCard>
          <Icon src={firstImage} alt="Imagem 1" />
        </ItemCard>
        <ItemCard>
          <Icon src={secondImage} alt="Imagem 2" />
        </ItemCard>
        <ItemCard>
          <Icon src={thirdImage} alt="Imagem 3" />
        </ItemCard>
        <ItemCard>
          <Icon src={fourthImage} alt="Imagem 4" />
        </ItemCard>
      </ItemGrid>
    </SectionContainer>
  );
}

export default Section6;
