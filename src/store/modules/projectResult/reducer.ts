import { createReducer } from 'reduxsauce';

import { actionsTypes } from './actions';

const INITIAL_STATE = {
  projectResults: []
};

export default createReducer(INITIAL_STATE, {
  [actionsTypes.GET_PROJECT_RESULTS_SUCCESS]: (state = INITIAL_STATE, payload) => ({
    ...state,
    projectResults: payload.payload
  }),
});
