import React, { Component } from 'react';
import Input from './Input';

export default class ReverseText extends Component {
  modifyText = (text) => {
    return text.split('').reverse().join('');
  }

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="reverseInput" description="Texto Invertido:" />
    );
  };
};