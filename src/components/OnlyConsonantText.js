import React, { Component } from 'react';
import Input from './Input';

export default class OnlyConsonantText extends Component {
  modifyText = (text) => {
    return text.replace(/[aeiou\d\s]/gi, '').replace(/[^A-Za-z]/gi, '');
  }

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="onlyConsonantInput" description="Somente consoantes:" />
    );
  };
};