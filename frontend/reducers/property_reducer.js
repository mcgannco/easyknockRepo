import { RECEIVE_DATA } from '../actions/property_actions';
import merge from 'lodash/merge';

const propertyReducer =  (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_DATA:
      return(merge({}, state, action.data));
    default:
      return state;
  }
};

export default propertyReducer;
