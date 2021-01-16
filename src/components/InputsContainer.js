import React, { Component } from 'react';
import Input from './Input';

export default class InputsContainer extends Component {

  render() {
    const { transformers, text } = this.props;

    return (
      <div>
        {
          transformers.map(({ id, description, handle }) =>
            <Input key={id}
              text={text}
              id={id}
              handle={handle}
              description={description} />

          )
        }
      </div>
    );
  };
};