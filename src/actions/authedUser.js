// Action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// Action creator
export const setAuthedUser = (authedUser) => ({
  type: SET_AUTHED_USER,
  authedUser,
});
