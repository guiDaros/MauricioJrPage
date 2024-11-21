// src/atoms/PopUp/index.tsx
import React from 'react';
import { PopupContainer, PopupContent, CloseButton, InputGroup, Input } from './styles';
import ButtonSec1 from '../BasicButton'; // Importando o componente ButtonSec1

interface PopupProps {
  closePopup: () => void;
}

function Popup({ closePopup }: PopupProps) {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Informações de Contato</h2>

        <div className="form-container">
          {/* Nome */}
          <InputGroup>
            <p>Nome</p>
            <Input type="text" placeholder="Digite seu nome" />
          </InputGroup>

          {/* Plano */}
          <InputGroup>
            <p>Plano</p>
            <select>
              <option value="mensal">Mensal</option>
              <option value="trimestral">Trimestral</option>
              <option value="anual">Anual</option>
            </select>
          </InputGroup>

          {/* E-mail */}
          <InputGroup>
            <p>E-mail</p>
            <Input type="email" placeholder="exemplo@dominio.com" />
          </InputGroup>

          {/* Telefone */}
          <InputGroup>
            <p>Telefone</p>
            <Input type="tel" placeholder="(XX) XXXXX-XXXX" />
          </InputGroup>

          {/* Botão de Envio */}
          <ButtonSec1 onClick={() => console.log('Formulário enviado')} aria-label="Enviar formulário">
            Enviar
          </ButtonSec1>
        </div>
      </PopupContent>
    </PopupContainer>
  );
}

export default Popup;
