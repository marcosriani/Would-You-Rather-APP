import { SET_AUTHED_USER } from '../actions/authedUser';

const authedUser = (state = 'johndoe', action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        id: action.authedUser,
      };

    default:
      return state;
  }
};

export default authedUser;
