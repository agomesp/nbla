import { createReducer } from 'reduxsauce';

import { actionsTypes } from './actions';

const INITIAL_STATE = {
  userProjects: [],
};

export default createReducer(INITIAL_STATE, {
  [actionsTypes.GET_USER_PROJECTS_SUCCESS]: (state = INITIAL_STATE, payload) => ({
    ...state,
    userProjects: payload.payload
  }),
});
