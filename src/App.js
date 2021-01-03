import React, { Component } from 'react';
import CamelCaseText from './components/CamelCaseText';
import CsvText from './components/CsvText';
import MainTextInput from './components/MainTextInput'
import NumericText from './components/NumericText';
import OnlyConsonantText from './components/OnlyConsonantText';
import OnlyVowelsText from './components/OnlyVowelsText';
import ReverseText from './components/ReverseText';
import SlugText from './components/SlugText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Aprendendo React"
    };
  };

  handleInput = (newText) => {
    this.setState({ text: newText })
  };

  render() {
    const { text } = this.state;
    return (
      <div className="container">
        <h3 className="center">react-text-transformer</h3>
        <MainTextInput text={text} handle={this.handleInput} />

        <div style={{ marginTop: '20px' }}>
          <h4 className="center">Transformações</h4>

          <ReverseText text={text} />
          <NumericText text={text} />
          <CsvText text={text} />
          <SlugText text={text} />
          <OnlyVowelsText text={text} />
          <OnlyConsonantText text={text} />
          <CamelCaseText text={text} />

        </div>
      </div>
    );
  };
};