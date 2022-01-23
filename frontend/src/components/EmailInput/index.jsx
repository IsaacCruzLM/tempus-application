import React from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer, Input, Label,
} from './styles';

function EmailInput({ label, name }) {
  return (
    <InputContainer>
      <Label htmlFor={`${name}Input`}>
        { label }
        <Input
          required
          type="email"
          maxlength="150"
          name={name}
          id={`${name}Input`}
        />
      </Label>
    </InputContainer>
  );
}

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default EmailInput;
