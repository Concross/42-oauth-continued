import React from 'react';

export default class Player extends React.Component {
  render() {
    const player = this.props.player;
    return (
      <h2>{player.player.firstName}</h2>
    );
  }
}
