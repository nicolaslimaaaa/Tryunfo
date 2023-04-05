import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          tipo="text"
          dataTestid="name-input"
          label="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />

        <Input
          tipo="textarea"
          dataTestid="description-input"
          label="Descrição"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          tipo="number"
          dataTestid="attr1-input"
          label="Attr01"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          tipo="number"
          dataTestid="attr2-input"
          label="Attr02"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          tipo="number"
          dataTestid="attr3-input"
          label="Attr03"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          tipo="text"
          dataTestid="image-input"
          label="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          name=""
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;