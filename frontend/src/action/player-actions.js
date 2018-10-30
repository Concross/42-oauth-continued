import superagent from 'superagent';

export const playerSet = players => {
  return {
    type: 'PLAYER_SET',
    payload: players,
  };
};

export const playerCreate = player => {
  return {
    type: 'PLAYER_CREATE',
    payload: player,
  };
};

export const playerUpdate = player => {
  return {
    type: 'PLAYER_UPDATE',
    payload: player,
  };
};

export const playerDestroy = player => {
  return {
    type: 'PLAYER_DESTROY',
    payload: player,
  };
};

/***********************************
*     ASYNC ACTIONS     *
************************************/
export const playersFetchAll = () => dispatch => {
  return superagent.get(`http://localhost:3000/api/v1/players`)
    .then(res => {
      dispatch(playerSet(res.body));
      return res;
    })
    .catch(console.error);
};

export const playerCreateRequest = player => dispatch => {
  return superagent.post(`http://localhost:3000/api/v1/add/player`)
    .set('Content-Type', 'application/json')
    .send(player)
    .then(res => {
      dispatch(playerCreate(res.body));
      return res;
    })
    .catch(console.error);
};

export const playerUpdateRequest = player => dispatch => {
  return superagent.put(`http://localhost:3000/api/v1/update/player`)
    .set('Content-Type', 'application/json')
    .send(player)
    .then(res => {
      dispatch(playerUpdate(res.body));
      return res;
    })
    .catch(console.err);
};
