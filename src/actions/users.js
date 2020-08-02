import { _getUsers } from '../utils/_DATA';

// Action type
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

// Receive users action creator
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

// Add a new question
export const addNewQuestionToUser = ({ id, author }) => ({
  type: ADD_NEW_QUESTION_TO_USER,
  id,
  author,
});

export const addAnswerToUser = (authedUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer,
  };
};

// Asynchronous action creator
export const getUsers = () => async (dispatch) => {
  const result = await _getUsers();
  dispatch(receiveUsers(result));
};
