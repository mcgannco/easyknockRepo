import { RECEIVE_SEARCH_ERRORS, CLEAR_ERRORS, RECEIVE_DATA } from '../actions/property_actions';
import merge from 'lodash/merge';

const errorsReducer =  (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return(merge({}, state, action.data));
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_DATA:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
