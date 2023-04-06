import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import './index.css';

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
    } = this.state;

    return (
      <div className="app__div">
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

        <Deck
          deck={ deck }
        />
      </div>
    );
  }
}

export default App;
