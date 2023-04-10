import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const { onInputChange, valueInput } = this.props;
    return (
      <div>
        Filtros:
        <label htmlFor="">
          Nome
          <input
            type="text"
            name="valueInput"
            data-testid="name-filter"
            onChange={ onInputChange }
            value={ valueInput }
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
};
