const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'PLAYER_CREATE':
      return [...state, payload];

    case 'PLAYER_UPDATE':
      return state.map(player => {
        if (player.id === payload.id) {
          return payload;
        }
        return player;
      });

    case 'PLAYER_DESTROY':
      return state.filter(player => { return player.id !== payload.id; });

    default: return state;
  }
};
