import { combineReducers } from 'redux';
import propertyReducer from './property_reducer';
import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  propertyInfo: propertyReducer,
  errors: errorsReducer,
  loading: loadingReducer
});

export default rootReducer;
