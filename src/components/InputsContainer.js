import React, { Component } from 'react';
import Input from './Input';

export default class InputsContainer extends Component {

  render() {
    const { transformers, text } = this.props;

    return (
      <div className="row" style={{ marginTop: '30px' }}>
        {
          transformers.map(({ id, description, handle }) =>
            <Input key={id}
              text={handle(text)}
              id={id}
              description={description} />
          )
        }
      </div>
    );
  };
};