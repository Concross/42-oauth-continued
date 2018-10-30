import React from 'react';
import { connect } from 'react-redux';
import { playersFetchAll } from '../../action/player-actions';
import Player from '../player';

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
    return (
      <div className="players-container">
        <h1>Players</h1>
        {this.state.isFetching ? (
          <h3>I'm fetching!</h3>
        )
          : (
            <ul>
              {
                this.props.players.map(player => {
                  return (
                    <li key={player._id}>
                      <Player />
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
