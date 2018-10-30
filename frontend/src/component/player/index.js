import React from 'react';

export default class Player extends React.Component {
  render() {
    const profile = this.props.player;
    return (
      <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
    );
  }
}
