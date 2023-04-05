import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>
        <Input tipo="text" dataTestid="name-input" label="Nome" />
        <Input tipo="textarea" dataTestid="description-input" label="Descrição" />
        <Input tipo="number" dataTestid="attr1-input" label="Attr01" />
        <Input tipo="number" dataTestid="attr2-input" label="Attr02" />
        <Input tipo="number" dataTestid="attr3-input" label="Attr03" />
        <Input tipo="text" dataTestid="image-input" label="Imagem" />
        <select name="" id="" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <Input tipo="checkbox" dataTestid="trunfo-input" label="Super Trybe Trunfo" />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
