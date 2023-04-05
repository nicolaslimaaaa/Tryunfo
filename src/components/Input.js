import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { tipo, dataTestid, label } = this.props;
    return (
      <label htmlFor="">
        { label }
        <input type={ tipo } data-testid={ dataTestid } />
      </label>
    );
  }
}

Input.propTypes = {
  tipo: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
