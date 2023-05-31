import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    // className="flex flex-col justify-center items-center border-2
    // border-stone-500 rounded-2xl w-1/5 h-80 bg-indigo-900 p-5 m-5 text-black"

    return (
      <div className="flex flex-col w-2/4">

        <label htmlFor="" className="">

          <p data-testid="name-card">{ cardName }</p>
        </label>

        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="w-72"
        />

        <label htmlFor="" className="">
          <p data-testid="description-card">{ cardDescription }</p>
        </label>

        <label htmlFor="" className="">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </label>

        <label htmlFor="" className="">
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </label>

        <label htmlFor="" className="">
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </label>

        <label htmlFor="" className="">
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
