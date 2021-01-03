import React, { Component } from 'react';
import { onlyOneSpace } from '../helpers/Helpers';
import Input from './Input';


export default class CsvText extends Component {
  modifyText = (text) => {
    return `"${onlyOneSpace(text).replace(/ /g, '";"')}"`;
  };

  render() {
    const text = this.modifyText(this.props.text);
    return (
      <Input text={text} id="csvInput" description="csvInput:" />
    );
  };
};