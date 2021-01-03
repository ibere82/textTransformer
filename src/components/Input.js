import React, { Component } from 'react';
import '../index.css';

export default class Input extends Component {

  handleCopyButton = () => {
    const { id } = this.props;
    const elem = document.getElementById(id);
    elem.select();
    document.execCommand('copy');
  };

  render() {
    const { text, id, description } = this.props;
    return (
      <div className="default-flex-row">

        <div className="input-field" style={{ flex: 6 }}>
          <input id={id} type="text" value={text} readOnly />
          <label htmlFor={id} className="active">{description}</label>

        </div>

        <span
          style={{ cursor: 'pointer' }}
          title="Copiar"
          alt="Copiar"
          className="material-icons"
          onClick={this.handleCopyButton}
        >
          content_copy
        </span>

      </div>
    );
  };
};