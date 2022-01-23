import React from 'react';

import {
  HeaderComponent, Title, HeaderButtons, ButtonContainer,
} from './styles';

function Header() {
  return (
    <HeaderComponent>
      <Title>
        Tempus
      </Title>
      <HeaderButtons>
        <ButtonContainer>
          <button type="button">
            Relátorios
          </button>
        </ButtonContainer>
      </HeaderButtons>
    </HeaderComponent>
  );
}

export default Header;
