import React, { useState } from 'react';
import { PopupContainer, PopupContent, CloseButton, InputGroup, Input } from './styles';
import ButtonSec1 from '../BasicButton'; // Importando o componente ButtonSec1
import { db } from '../../firebase'; // Importando a configuração do Firebase
import { collection, addDoc } from 'firebase/firestore'; // Função para adicionar dados

interface PopupProps {
  closePopup: () => void;
}

function Popup({ closePopup }: PopupProps) {
  // States para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [plan, setPlan] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Para controlar o estado de envio

  // Função para enviar os dados para o Firebase
  const handleSubmit = async () => {
    if (!name || !plan || !email || !phone) {
      alert('Todos os campos devem ser preenchidos!');
      return; // Não envia se algum campo estiver vazio
    }
  
    try {
      setIsSubmitting(true); // Indica que está enviando os dados
      // Enviar os dados para o Firebase
      await addDoc(collection(db, 'EmailManagementMJTEAM'), {
        name,
        plan,
        email,
        phone,
      });
      console.log('Dados enviados com sucesso!');
      closePopup(); // Fecha o pop-up após envio
  
      // Redireciona para o WhatsApp
      window.location.href = `https://wa.me/5554996252215?text=${encodeURIComponent(
        `Olá, meu nome é ${name}. Estou interessado no plano ${plan}.`
      )}`;
    } catch (e) {
      console.error('Erro ao enviar dados:', e);
    } finally {
      setIsSubmitting(false); // Restaura o estado de envio
    }
  };
  

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={closePopup}>X</CloseButton>
        <h2>Informações de Contato</h2>

        <div className="form-container">
          {/* Nome */}
          <InputGroup>
            <p>Nome</p>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          {/* Plano */}
          <InputGroup>
            <p>Plano</p>
            <select value={plan} onChange={(e) => setPlan(e.target.value)}>
              <option value="semestre">Semestral</option>
              <option value="trimestral">Trimestral</option>
              <option value="anual">Anual</option>
            </select>
          </InputGroup>

          {/* E-mail */}
          <InputGroup>
            <p>E-mail</p>
            <Input
              type="email"
              placeholder="exemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          {/* Telefone */}
          <InputGroup>
            <p>Telefone</p>
            <Input
              type="tel"
              placeholder="(XX) XXXXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>

          {/* Botão de Envio */}
          <ButtonSec1
            onClick={handleSubmit}
            aria-label="Enviar formulário"
            disabled={isSubmitting} // Agora o ButtonSec1 aceita o disabled
            //envia para o whats app
            // () => window.location.href='https://wa.me/5554996252215' juntar ao onclick
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </ButtonSec1>
        </div>
      </PopupContent>
    </PopupContainer>
  );
}

export default Popup;
