import React from 'react';
import { connect } from 'react-redux';
import { playersFetchAll, playerCreateRequest } from '../../action/player-actions';
import Player from '../player';
import PlayerForm from '../player-form';

export class PlayersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
    };
  }
  componentWillMount() {
    this.setState({ isFetching: true });
    this.props.actions.playersFetchAll();
    this.setState({ isFetching: false });
  }

  render() {
    const { actions, players } = this.props;
    return (
      <div className="players-container">
        <h1>Players</h1>
        <PlayerForm actions={actions} />
        {this.state.isFetching
          ? (<h3>I'm fetching!</h3>)
          : (
            <ul>
              {
                players.map(player => {
                  return (
                    <li key={player._id}>
                      <Player player={player} />
                    </li>
                  );
                })}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      playersFetchAll: () => dispatch(playersFetchAll()),
      playerCreateRequest: player => dispatch(playerCreateRequest(player)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
