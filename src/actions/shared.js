import { addAnswerToQuestion, addNewQuestionToQuestions } from './questions';
import { addAnswerToUser, addNewQuestionToUser } from './users';
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';

// Asynchronous action creator
export const handleAddAnswer = (authedUser, qid, answer) => (dispatch) => {
  dispatch(addAnswerToUser(authedUser, qid, answer));
  dispatch(addAnswerToQuestion(authedUser, qid, answer));

  return _saveQuestionAnswer({ authedUser, qid, answer }).catch((e) => {
    console.warn('An error occurred in handleAddAnswer:', e);
  });
};

export const handleAddNewQuestion = (
  optionOneText,
  optionTwoText,
  author
) => async (dispatch) => {
  const question = { optionOneText, optionTwoText, author };
  const response = await _saveQuestion(question);

  dispatch(addNewQuestionToQuestions(response));
  dispatch(addNewQuestionToUser(response));
};
