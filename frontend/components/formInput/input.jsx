import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID',
      'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
      'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN',
       'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
       address: null,
       city: null,
       state: null,
       zip: null
    }
    this.createSelectItems = this.createSelectItems.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.submit = this.submit.bind(this)
    this.validRequest = this.validRequest.bind(this)
  }

  createSelectItems() {
     let items = [];
     for (let i = 0; i <= this.state.states.length; i++) {
       let stateName = this.state.states[i]
          items.push(<option key={i} value={stateName}>{stateName}</option>);
     }
     return items;
 }

 updateInput(e, item) {
   e.preventDefault();
   let value = e.currentTarget.value;
   if(item === "address") {
     this.setState({address: value})
   } else if(item === "city") {
     this.setState({city: value})
   } else if (item === "zip") {
     this.setState({zip: value})
   } else if (item === "state") {
     this.setState({state: value})
   }
 }

 submit(e) {
   e.preventDefault();
   if(this.validRequest()) {
     
     debugger
   } else {

   }
 }

 validRequest() {
  let validZip = false;
  let validAddress = false;
  let validCity = false;
  if(this.state.zip && this.state.zip.length && this.state.zip.match(/^-{0,1}\d+$/) && this.state.zip.length === 5){
    if(parseInt(this.state.zip) >= 0) {
      validZip = true;
    }
  }
  if(this.state.address) {
    validAddress = true
  }
  if(this.state.city) {
    validCity = true
  }

  if(validZip && validAddress && validCity) {
    return true;
  }
 }

  render() {
    let optionList = this.createSelectItems();
    return(
      <div className="input-container">
        <div className="input-form-container">
          <h1>Property Input</h1>
          <form className="input-form">
            <input onChange={(e) => this.updateInput(e, "address")} placeholder="Street Address"></input>
            <div className="city-state">
              <input onChange={(e) => this.updateInput(e, "city")} placeholder="City"></input>
              <select onChange={(e) => this.updateInput(e, "state")}>
                {optionList}
              </select>
            </div>
            <input onChange={(e) => this.updateInput(e, "zip")} placeholder="Zip Code"></input>
            <div className="submit-container">
              <button onClick={this.submit}>Search</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}


export default InputForm;
