import { START_LOADING, RECEIVE_DATA, RECEIVE_SEARCH_ERRORS } from '../actions/property_actions';
import merge from 'lodash/merge';

const loadingReducer =  (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA:
      return false;
    case RECEIVE_SEARCH_ERRORS:
      return false;
    case START_LOADING:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
