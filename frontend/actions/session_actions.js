import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch => (
  APIUtil.signUp(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );
export const signIn = user => dispatch => (
  APIUtil.signIn(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signOut = () => dispatch => (
  APIUtil.signOut().then(user => (
    dispatch(logoutCurrentUser())
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
