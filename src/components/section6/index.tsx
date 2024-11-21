import React from 'react';
import { SectionContainer, SectionTitle, ItemGrid, ItemCard, Icon, ItemTitle, ItemDescription, ItemHeader } from './styles';

function Section6() {
  return (
    <SectionContainer>
      <SectionTitle>O título principal da seção</SectionTitle>
      <ItemGrid>
        <ItemCard>
          <ItemHeader>
            <Icon src="caminho-da-imagem-1" alt="Imagem 1" />
            <ItemTitle>Título 1</ItemTitle>
          </ItemHeader>
          <ItemDescription>Texto descritivo para o primeiro item.</ItemDescription>
        </ItemCard>
        <ItemCard>
          <ItemHeader>
            <Icon src="caminho-da-imagem-2" alt="Imagem 2" />
            <ItemTitle>Título 2</ItemTitle>
          </ItemHeader>
          <ItemDescription>Texto descritivo para o segundo item.</ItemDescription>
        </ItemCard>
        <ItemCard>
          <ItemHeader>
            <Icon src="caminho-da-imagem-3" alt="Imagem 3" />
            <ItemTitle>Título 3</ItemTitle>
          </ItemHeader>
          <ItemDescription>Texto descritivo para o terceiro item.</ItemDescription>
        </ItemCard>
        <ItemCard>
          <ItemHeader>
            <Icon src="caminho-da-imagem-4" alt="Imagem 4" />
            <ItemTitle>Título 4</ItemTitle>
          </ItemHeader>
          <ItemDescription>Texto descritivo para o quarto item.</ItemDescription>
        </ItemCard>
      </ItemGrid>
    </SectionContainer>
  );
}

export default Section6;
