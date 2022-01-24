import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

function Bagde({ renda }) {
  const classifyBadgeColor = () => {
    if (renda <= 980) return 'red';
    if (renda > 980 && renda <= 2500) return 'yellow';
    if (renda > 2500) return 'green';
    return 'red';
  };

  return (
    <Container colorOfBadge={classifyBadgeColor(renda)}>
      {`R$ ${renda.toFixed(0)}`}
    </Container>
  );
}

Bagde.propTypes = {
  renda: PropTypes.string.isRequired,
};

export default Bagde;
