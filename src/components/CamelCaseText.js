import React, { Component } from 'react';
import { removeSpecialCharacters } from '../helpers/Helpers';
import Input from './Input';

export default class CamelCaseText extends Component {

  modifyText = (text) => {
    const textArray = removeSpecialCharacters(text).toLowerCase().trim().split('');
    textArray.forEach((word, index, textArray) => {
      if (word === ' ') textArray[index + 1] = textArray[index + 1].toUpperCase()
    });
    return textArray.join('').replace(/\s/g, '');
  };

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="camelCaseInput" description="camelCaseInput:" />
    );
  };
};