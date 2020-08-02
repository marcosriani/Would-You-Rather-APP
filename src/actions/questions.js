import { _getQuestions } from '../utils/_DATA';

// Action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_NEW_QUESTION_TO_QUESTION = 'ADD_NEW_QUESTION_TO_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

// Receive pools action creator
export const receiveQuestions = (questions) => ({
  // Return an action
  type: RECEIVE_QUESTIONS,
  questions,
});

// Add a new question
export const addNewQuestionToQuestions = (question) => ({
  type: ADD_NEW_QUESTION_TO_QUESTION,
  question,
});

// Add answered question
export const addAnswerToQuestion = (authedUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer,
  };
};

// Asynchronous action creator
export const handleInitialData = () => async (dispatch) => {
  const response = await _getQuestions();
  dispatch(receiveQuestions(response));
};
