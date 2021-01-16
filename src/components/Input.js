import React, { Component } from 'react';

export default class Input extends Component {

  componentDidUpdate() {
    const { id, text } = this.props;
    const elem = document.getElementById(id);
    elem.disabled = !text;
  };

  handleCopyButton = () => {
    const { id } = this.props;
    const elem = document.getElementById(id);
    elem.select();
    document.execCommand('copy');
  };

  render() {
    const { text, id, description } = this.props;
    const icon = 'content_copy';
    return (
      <div className="default-flex-row col s12 m6 l4">
        <div className="input-field" style={{ flex: 6 }}>
          <label htmlFor={id} className="active">{description}</label>
          <input id={id} type="text" value={text} readOnly />
        </div>
        <span
          title="Copiar"
          alt="Copiar"
          className="material-icons"
          onClick={this.handleCopyButton}
          style={text ? { cursor: 'pointer' } : { color: 'gray' }}
        >
          {icon}
        </span>
      </div>
    );
  };
};