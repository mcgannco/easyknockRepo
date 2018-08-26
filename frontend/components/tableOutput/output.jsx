import React from 'react';

class OutputTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.getVals = this.getVals.bind(this);
  }

  drawTable() {
    let { property } = this.props;
    let rows = Object.keys(property).slice(1)
    let addressKeys = Object.keys(property.address)
    let addressVals = this.getVals(property.address, addressKeys)
    return <div className="table-container">
      <div className="table-table">
        <h3>Address</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Other</h3>
        <table>
          {addressVals}
        </table>
      </div>


    </div>
  }

  getVals(hash,arr) {
    let items = [];
    for (let i = 0; i <= arr.length; i++) {
      let val = hash[arr[i]]
      if(val === null) {
        val = "n/a"
      }
         items.push(<tr key={i} value={val}>
           <td>{arr[i]}</td>
           <td>{val}</td>
         </tr>);
    }
    return items;
  }

  render() {
    let {errors, status, loading} = this.props;
    if(errors.message) {
      return <div className="error-message">
        <h2>{errors.message}</h2>
      </div>
    } else if(status === "success") {
      let table = this.drawTable();
      return <div>
        {table}
      </div>
    } else if(loading) {
      return <section className="spinner-container">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
      </section>
    } else {
      return null
    }
  }
}


export default OutputTable;
