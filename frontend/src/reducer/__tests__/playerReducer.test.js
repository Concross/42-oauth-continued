import playerReducer from '../playerReducer';

describe('playerReducer', () => {
  test('should return the given state if no action is given', () => {
    const state = [];
    const action = { type: null, payload: 'nothing' };
    const actual = playerReducer(state, action);

    expect(actual).toEqual(state);
  });

  test('should append a new player to state if action is to create', () => {
    const state = [];
    const action = { type: 'PLAYER_CREATE', payload: 'gas' };
    const actual = playerReducer(state, action);

    expect(actual).toEqual(['gas']);
  });

  test('should not mutate the original state', () => {
    const state = [];
    const action = { type: 'PLAYER_CREATE', payload: 'gas' };
    const actual = playerReducer(state, action);

    expect(state).toEqual([]);
  });

  test('should update an existing player if action is to update', () => {
    const state = [{ id: 1, firstName: 'Connor', lastName: 'Crossley' }];
    const action = { type: 'PLAYER_UPDATE', payload: { id: 1, firstName: 'Alex', lastName: 'Hanson' } };

    const actual = playerReducer(state, action);
    const expected = [{ id: 1, firstName: 'Alex', lastName: 'Hanson' }];

    expect(actual).toEqual(expected);
  });
});
