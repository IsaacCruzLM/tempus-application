/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Container from './styles';

function Loading() {
  return (
    <Container>
      <div className="loader"></div>
    </Container>
  );
}

export default Loading;
