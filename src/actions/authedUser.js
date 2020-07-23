// Action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

// Action creator
export const setAuthedUser = (id) => ({
  type: SET_AUTHED_USER,
  id,
});
