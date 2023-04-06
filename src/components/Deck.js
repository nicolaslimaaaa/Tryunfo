import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Deck.css';

class Deck extends Component {
  render() {
    const {
      deck,
    } = this.props;

    return (
      <div className="deck__div">
        {deck.map((card, index) => (<Card
          key={ index }
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
        />))}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf().isRequired,
};

export default Deck;
