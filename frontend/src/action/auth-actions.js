import superagent from 'superagent';

export const tokenSet = token => {
  return {
    type: 'TOKEN_SET',
    payload: token,
  };
};

export const tokenDelete = () => {
  return {
    type: 'TOKEN_DELETE',
  };
};

export const signupRequest = user => dispatch => {
  return superagent.post(`http://localhost:3000/register`)
    .send(user)
    .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('token', res.text);
      return res;
    })
    .catch(console.error);
};

export const loginRequest = user => dispatch => {
  return superagent.get(`http://localhost:3000/signin`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('token', res.text);
      return res;
    })
    .catch(console.error);
};
