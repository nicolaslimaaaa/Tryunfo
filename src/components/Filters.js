import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const { onInputChange, nameInput, rareInput } = this.props;
    return (
      <div>
        Filtros:
        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            name="nameInput"
            data-testid="name-filter"
            onChange={ onInputChange }
            value={ nameInput }
            id="nameInput"
          />
        </label>

        <label htmlFor="">
          Raridade:
          <select
            name="rareInput"
            data-testid="rare-filter"
            value={ rareInput }
            onChange={ onInputChange }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label
          htmlFor="superTrunfo"
          data-testid="trunfo-filter"
        >
          Super Trunfo
          <input
            type="checkbox"
            name=""
            id="superTrunfo"
            checked="false"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired,
  rareInput: PropTypes.string.isRequired,
};
