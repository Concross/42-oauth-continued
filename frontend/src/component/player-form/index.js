import React from 'react';

export default class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  render() {
    return (
      <h1>Hello PlayerForm!</h1>
    );
  }
}
