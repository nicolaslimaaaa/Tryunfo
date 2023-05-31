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
      <form
        className="flex flex-col w-1/3 items-center justify-center border-2 rounded-lg
        border-light-blue-lol bg-blue-lol"
      >
        <Input
          name="cardName"
          tipo="text"
          dataTestid="name-input"
          label="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />

        <Input
          name="cardDescription"
          tipo="textarea"
          dataTestid="description-input"
          label="Descrição"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          name="cardAttr1"
          tipo="number"
          dataTestid="attr1-input"
          label="Attr01"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          name="cardAttr2"
          tipo="number"
          dataTestid="attr2-input"
          label="Attr02"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          tipo="number"
          dataTestid="attr3-input"
          label="Attr03"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          name="cardImage"
          tipo="text"
          dataTestid="image-input"
          label="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          name="cardRare"
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          className="text-center rounded-xl my-1
          bg-light-blue-lol w-36"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        { hasTrunfo ? (
          <p
            className="text-center text-purple-lol-complement"
          >
            Você já tem um Super Trunfo em seu baralho
          </p>
        ) : (
          <label
            htmlFor="cardTrunfo"
            className=""
          >
            Super Trybe Trunfo
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="cardTrunfo"
              className="my-2 "
            />
          </label>
        )}

        <button
          name="cardsSaved"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="bg-yellow-lol rounded px-4 py-1 my-4"
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
