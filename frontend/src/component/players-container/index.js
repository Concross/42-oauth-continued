import React from 'react';
import { connect } from 'react-redux';
import {
  playersFetchAll,
  playerCreateRequest,
  playerUpdateRequest,
  playerDestroyRequest,
} from '../../action/player-actions';
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

  renderItemSet(items) {
    return (
      <ul>
        {items.map(item => this.renderItem(item))}
      </ul>
    );
  }

  renderItem(item) {
    return (
      <li key={item._id}>
        <Player player={item} destroy={this.props.actions.playerDestroyRequest}>
          <PlayerForm player={item} onComplete={this.props.actions.playerUpdateRequest} legend="Update Player" buttonText="Update" />
        </Player>
      </li>
    );
  }

  render() {
    const { actions, players } = this.props;
    return (
      <div className="players-container">
        <h1>Players</h1>
        <PlayerForm onComplete={actions.playerCreateRequest} legend="Add Player" buttonText="Add" />
        {this.state.isFetching ? <h3>I'm fetching!</h3> : this.renderItemSet(players)}
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
      playerCreateRequest: player => dispatch(playerCreateRequest(player)),
      playerUpdateRequest: player => dispatch(playerUpdateRequest(player)),
      playerDestroyRequest: player => dispatch(playerDestroyRequest(player)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
