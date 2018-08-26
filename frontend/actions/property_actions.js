import * as APIUtil from '../util/property_util';
export const RECEIVE_DATA = "RECEIVE_DATA";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const START_LOADING = "START_LOADING";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSearch = payload => {
  return({
    type: RECEIVE_DATA,
    data: payload,
  });
}

export const receiveSearchErrors = err => {
  return({
    type: RECEIVE_SEARCH_ERRORS,
    data: err,
  });
}

export const clearErrors = () => {
  return({
    type: CLEAR_ERRORS,
  });
}

export const startLoading = () => {
  return({
    type: START_LOADING,
  });
}

export const fetchProperty = (address,city,state,zip) => dispatch => {
  dispatch(startLoading())
  return APIUtil.searchProperty(address,city,state,zip)
    .then( payload => dispatch(receiveSearch(payload)))
    .fail( err => dispatch(receiveSearchErrors(err.responseJSON)));
}
