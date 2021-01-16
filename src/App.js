import React, { Component } from 'react';
import { onlyOneSpace, specialCases } from './helpers/Helpers';
import InputsContainer from './components/InputsContainer';
import MainTextInput from './components/MainTextInput';
import M from 'materialize-css';

const TRANSFORMERS = [
  {
    id: 'trsf-01',
    description: 'Texto Invertido',
    handle: text => text.split('').reverse().join('')
  },

  {
    id: 'trsf-02',
    description: 'Texto Numérico',
    handle: text => text.toUpperCase()
      .replace(/O/g, '0').replace(/L/g, '1')
      .replace(/E/g, '3').replace(/A/g, '4')
      .replace(/S/g, '5').replace(/T/g, '7')
  },
  {
    id: 'trsf-03',
    description: 'Somente vogais',
    handle: text => text.replace(/[bcdfghjklmnpqrstvwxyz\d\s]/gi, '')

  },
  {
    id: 'trsf-04',
    description: 'Somente consoantes',
    handle: text => text.replace(/[aeiou\d\s]/gi, '').replace(/[^A-Za-z]/gi, '')
  },
  {
    id: 'trsf-05',
    description: 'MaIúScUlAs e mInÚsCuLaS AlTeRnAdAs',
    handle: text => text.toLowerCase().split('').map((letter, index) =>
      index % 2 ? letter.toUpperCase() : letter
    ).join('')
  },
  {
    id: 'trsf-06',
    description: 'camelCase',
    handle: text => specialCases(text)
      .toLowerCase().split(' ')
      .map((word, index) =>
      (index
        ? word.toLowerCase().split('').map((letter, pos) => {
          if (pos === 0) letter = letter.toUpperCase()
          return letter
        }).join('')
        : word
      )).join('')
  },
  {
    id: 'trsf-07',
    description: 'Pascal Case',
    handle: text => specialCases(text)
      .toLowerCase().split(' ')
      .map((word) => word.toLowerCase().split('').map((letter, pos) => {
        if (pos === 0) letter = letter.toUpperCase()
        return letter
      }).join('')).join('')
  },
  {
    id: 'trsf-08',
    description: 'Snake Case',
    handle: text => specialCases(text).toUpperCase().replace(/\s/gi, '_')
  },
  {
    id: 'trsf-09',
    description: 'Texto CSV',
    handle: text => `"${onlyOneSpace(text).replace(/ /g, '";"')}"`
  },
  {
    id: 'trsf-10',
    description: 'Slug',
    handle: text => specialCases(text).toLowerCase().replace(/ /g, '-')
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "React text transformer"
    };
  };

  componentDidMount() {
    M.AutoInit();
  };

  handleInput = (newText) => this.setState({ text: newText });

  render() {
    const { text } = this.state;
    return (
      <div className="container" >
        <h3 className="center" style={{ marginBottom: "40px" }} >Transformador de textos</h3>

        <MainTextInput text={text} handle={this.handleInput} />

        <div style={{ marginTop: '20px' }}>
          <h4 className="center">Transformações</h4>

          <InputsContainer transformers={TRANSFORMERS} text={text} />

        </div>
      </div>
    );
  };
};