import React, { useState } from 'react';

type State = {
  count: number;
};

export class Example extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1})}>
          Click me
      </button>
      </div>
    );
  }
}
