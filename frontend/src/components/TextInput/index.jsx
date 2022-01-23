import React from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer, Input, Label,
} from './styles';

function TextInput({ label, name }) {
  return (
    <InputContainer>
      <Label htmlFor={`${name}Input`}>
        { label }
        <Input required type="text" maxlength name={name} id={`${name}Input`} />
      </Label>
    </InputContainer>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
