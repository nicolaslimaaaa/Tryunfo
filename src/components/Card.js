import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
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
      // hasTrunfo,
    } = this.props;

    return (
      <div className="cards__div">
        <label htmlFor="" className="cards__label">

          <p data-testid="name-card">{ cardName }</p>
        </label>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="cards__img"
        />

        <label htmlFor="" className="cards__label">
          <p data-testid="description-card">{ cardDescription }</p>
        </label>

        <label htmlFor="" className="cards__label">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </label>

        <label htmlFor="" className="cards__label">
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </label>

        <label htmlFor="" className="cards__label">
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </label>

        <label htmlFor="" className="cards__label">
          <p data-testid="rare-card">{ cardRare }</p>
        </label>

        { (cardTrunfo) && <p data-testid="trunfo-card">Super Trunfo</p> }

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
