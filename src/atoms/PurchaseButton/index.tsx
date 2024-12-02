// src/atoms/PurchaseButton/index.tsx
import React, { useState } from "react";
import { ButtonContainer, ButtonText } from "./styles";
import Popup from "../PopUp";

const PurchaseButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <ButtonContainer type="button" onClick={openPopup}>
        <ButtonText>Adiquira Já</ButtonText>
      </ButtonContainer>

      {isPopupOpen && <Popup closePopup={closePopup} />}
    </>
  );
};

export default PurchaseButton;
