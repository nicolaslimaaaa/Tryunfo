import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import './index.css';
import Filters from './components/Filters';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    nameInput: '',
    rareInput: '',
  };

  onInputChange = ({ target: { value, name, checked } }) => {
    this.setState({
      [name]: (name === 'cardTrunfo' ? checked : value),
    }, this.verifyInputs);
  };

  onSaveButtonClick = () => {
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
    } = this.state;

    this.setState((prev) => (
      {
        deck: [
          ...prev.deck,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: cardTrunfo ? true : hasTrunfo,
        isSaveButtonDisabled: true,
      }
    ));
  };

  verifyInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const nome = cardName !== '';
    const descricao = cardDescription !== '';
    const imagem = cardImage !== '';
    const sumAttr = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      <= Number('210');
    const attr1 = cardAttr1 >= 0 && cardAttr1 <= Number('90') && cardAttr1 !== '';
    const attr2 = cardAttr2 >= 0 && cardAttr2 <= Number('90') && cardAttr2 !== '';
    const attr3 = cardAttr3 >= 0 && cardAttr3 <= Number('90') && cardAttr3 !== '';
    const allVerify = nome && descricao && imagem && sumAttr && attr1 && attr2 && attr3;

    this.setState({
      isSaveButtonDisabled: !allVerify,
    });
  };

  onDeleteButtonClick = ({ target: { name } }) => {
    const {
      hasTrunfo,
      deck,
    } = this.state;

    const deckFilter = deck.filter((card) => card.cardName !== name);

    const cardRemoved = deck.find((card) => card.cardName === name);

    this.setState({
      deck: deckFilter,
      hasTrunfo: cardRemoved.cardTrunfo ? false : hasTrunfo,
    });
  };

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
      deck,
      nameInput,
      rareInput,
    } = this.state;

    return (
      <div
        className="bg-dark-blue-lol min-h-screen"
      >
        <div className="flex justify-around p-10">

          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </div>

        <Filters
          onInputChange={ this.onInputChange }
          nameInput={ nameInput }
          rareInput={ rareInput }
        />

        <Deck
          deck={ deck }
          onDeleteButtonClick={ this.onDeleteButtonClick }
          nameInput={ nameInput }
          rareInput={ rareInput }
        />
      </div>
    );
  }
}

export default App;
