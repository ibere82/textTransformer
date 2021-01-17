import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import MainTextInput from './components/MainTextInput';
import TRANSFORMERS from './transformers/Transformers'
import M from 'materialize-css';

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
        <InputsContainer transformers={TRANSFORMERS} text={text} />
      </div>
    );
  };
};