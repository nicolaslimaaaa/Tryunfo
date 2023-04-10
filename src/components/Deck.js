import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Deck.css';

class Deck extends Component {
  render() {
    const {
      deck,
      onDeleteButtonClick,
      valueInput,
    } = this.props;

    return (
      <div className="deck__div">
        {deck
          .filter((card) => card.cardName.includes(valueInput))
          .map((card, index) => (
            <div key={ index }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />

              <button
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ onDeleteButtonClick }
              >
                Excluir
              </button>

            </div>
          ))}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf().isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
};

export default Deck;
