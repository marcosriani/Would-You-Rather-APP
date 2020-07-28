import { addAnswerToQuestion } from './questions';
import { addAnswerToUser } from './users';
import { _saveQuestionAnswer } from '../utils/_DATA';

// Asynchronous action creator
export const handleAddAnswer = (authedUser, qid, answer) => (dispatch) => {
  console.log(authedUser, qid, answer);

  dispatch(addAnswerToUser(authedUser, qid, answer));
  dispatch(addAnswerToQuestion(authedUser, qid, answer));

  console.log(authedUser);

  return _saveQuestionAnswer({ authedUser, qid, answer }).catch((e) => {
    console.warn('An error occurred in handleAddAnswer:', e);
  });
};
