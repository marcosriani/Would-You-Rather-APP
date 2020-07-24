import { _getQuestions } from '../utils/_DATA';

// Action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// Receive pools action creator
export const receiveQuestions = (questions) => ({
  // Return an action
  type: RECEIVE_QUESTIONS,
  questions,
});

// Asynchronous action creator
export const handleInitialData = () => async (dispatch) => {
  const response = await _getQuestions();
  dispatch(receiveQuestions(response));
};
