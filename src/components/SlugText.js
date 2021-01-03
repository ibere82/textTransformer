import React, { Component } from 'react';
import { removeSpecialCharacters, onlyOneSpace } from '../helpers/Helpers';
import Input from './Input';

export default class SlugText extends Component {
  modifyText = (text) => {
    return removeSpecialCharacters(onlyOneSpace(text)).toLowerCase().replace(/ /g, '-');
  }

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="slugInput" description="Slug:" />
    );
  };
};