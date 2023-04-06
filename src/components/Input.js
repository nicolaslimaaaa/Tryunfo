import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  render() {
    const { name, tipo, dataTestid, label, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          type={ tipo }
          data-testid={ dataTestid }
          value={ value }
          onChange={ onChange }
          id={ name }
          className="input-input"
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
