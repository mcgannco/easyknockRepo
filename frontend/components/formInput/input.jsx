import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    debugger
    return(
      <div>
        <form>
          <input placeholder="Street Address"></input>
          <input placeholder="City"></input>
          <input placeholder="State"></input>
          <input placeholder="Zip Code"></input>
        </form>
      </div>
    )
  }
}


export default InputForm;
