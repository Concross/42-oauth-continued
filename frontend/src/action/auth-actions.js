import superagent from 'superagent';
import * as utils from '../lib/util';

/********************************************************************************
*         Synchronous                                                           *
********************************************************************************/

export const login = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};

export const logout = () => {
  utils.cookieDelete('chatToken');
  return {
    type: 'LOGOUT',
  };
};

/********************************************************************************
*        Asynchronous                                                           *
********************************************************************************/

export const signupRequest = user => dispatch => {
  return superagent.post(`http://localhost:3000/signup`)
    .send(user)
    .withCredentials()
    .then(res => {
      console.log(res);
      const token = utils.cookieFetch('token');
      if (token) dispatch(login(token));
      return res;
    })
    .catch(console.error);
};

export const loginRequest = user => dispatch => {
  return superagent.get(`http://localhost:3000/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      const token = utils.cookieFetch('token');
      if (token) dispatch(login(token));
      return res;
    })
    .catch(console.error);
};
