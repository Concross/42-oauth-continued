import React from 'react';
import { connect } from 'react-redux';
import { playersFetchAll } from '../../action/player-actions';

export class PlayersContainer extends React.Component {
  componentDidMount() {
    this.props.actions.playersFetchAll();
  }

  render() {
    return (
      <div className="players-container">
        <h1>Hello PlayersContainer!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      playersFetchAll: () => dispatch(playersFetchAll()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
