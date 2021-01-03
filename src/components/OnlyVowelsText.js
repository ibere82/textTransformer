import React, { Component } from 'react';
import Input from './Input';

export default class OnlyVowelsText extends Component {
  modifyText = (text) => {
    return text.replace(/[bcdfghjklmnpqrstvwxyz\d\s]/gi, '');
  }

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="onlyVowelsInput" description="Somente vogais:" />
    );
  };
};