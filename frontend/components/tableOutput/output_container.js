import {connect} from 'react-redux';
import OutputTable from './output'
import { clearErrors } from '../../actions/property_actions';

const msp = (state, ownProps) => {
  let property;
  if(state.propertyInfo.data) {
    property = state.propertyInfo.data.property
  }

  return({
    property,
    errors: state.errors,
    status: state.propertyInfo.status,
    loading: state.loading
  })
};

const mdp = dispatch => {
  return({
    clearErrors: () => dispatch(clearErrors()),
  })
};

export default connect(msp, mdp)(OutputTable);
