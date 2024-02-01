import { createReducer } from 'reduxsauce';

import { actionsTypes } from './actions';

const INITIAL_STATE = {
  language: 'en-US'
};

export default createReducer(INITIAL_STATE, {
  [actionsTypes.SELECT_LANGUAGE]: (state = INITIAL_STATE, { payload }) => ({
    ...state,
    language: payload.language
  })
});
