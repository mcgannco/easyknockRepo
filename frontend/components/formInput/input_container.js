import {connect} from 'react-redux';
import { fetchProperty } from '../../actions/property_actions';
import InputForm from './input'
const msp = (state, ownProps) => {
  return({

  })
};

const mdp = dispatch => {
  return({
    fetchProperty: (address,city,state,zip) => dispatch(fetchProperty(address,city,state,zip)),
  })
};

export default connect(msp, mdp)(InputForm);
