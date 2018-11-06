import React from 'react';

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.destroy(this.props.player);
  }

  render() {
    const profile = this.props.player;
    return (
      <div className="player">
        <button id="btn-delete" onClick={this.handleClick}>X</button>
        <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
        {this.props.children}
      </div>
    );
  }
}
