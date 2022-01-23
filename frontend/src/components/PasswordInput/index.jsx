import React from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer, Input, Label,
} from './styles';

function PasswordInput({ label, name }) {
  return (
    <InputContainer>
      <Label htmlFor={`${name}Input`}>
        { label }
        <Input
          required
          type="password"
          maxlength="16"
          minlength="8"
          name={name}
          id={`${name}Input`}
        />
      </Label>
    </InputContainer>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PasswordInput;
