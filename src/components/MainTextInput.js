import React, { Component } from 'react';

export default class MainTextInput extends Component {

  handleText = (e) => {
    this.props.handle(e.target.value)
  };

  render() {
    const { text } = this.props;
    return (
      <div className="input-field">
        <input id="mainText" type="text" value={text} onChange={this.handleText} autoFocus />
        <label htmlFor="mainText" className="active">Digite um texto qualquer </label>
      </div>
    );
  };
};