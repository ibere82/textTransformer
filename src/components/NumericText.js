import React, { Component } from 'react';
import Input from './Input';

export default class NumericText extends Component {
  modifyText = (text) => {
    return text.toUpperCase()
      .replace(/O/g, '0').replace(/L/g, '1')
      .replace(/E/g, '3').replace(/A/g, '4')
      .replace(/S/g, '5').replace(/T/g, '7');
  };

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="numericInput" description="Texto numérico:" />
    );
  };
};