import { _getUsers } from '../utils/_DATA';

// Action type
export const RECEIVE_USERS = 'RECEIVE_USERS';

// Receive users action creator
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

// Asynchronous action creator
export const getUsers = () => (dispatch) => {
  return _getUsers().then((data) => {
    console.log(data);
    dispatch(receiveUsers(data));
  });
};
