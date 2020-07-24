import { _getUsers, _getQuestions } from './_DATA';

export const getInitialData = () =>
  Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }));
