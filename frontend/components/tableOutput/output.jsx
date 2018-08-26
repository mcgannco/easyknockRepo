import React from 'react';

class OutputTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.getVals = this.getVals.bind(this);
    this.getNestedCompVals = this.getNestedCompVals.bind(this);
  }

  drawTable() {
    let { property } = this.props;
    let rows = Object.keys(property).slice(1)
    let addressKeys = Object.keys(property.address)
    let addressVals = this.getVals(property.address, addressKeys)

    let boundKeys = Object.keys(property.boundaries)
    let boundVals = this.getVals(property.boundaries, boundKeys)

    let metaKeys = Object.keys(property.metadata)
    let metaVals = this.getVals(property.metadata, metaKeys)

    let postKeys = Object.keys(property.postal)
    let postVals = this.getVals(property.postal, postKeys)

    let siteKeys = Object.keys(property.site)
    let siteVals = this.getVals(property.site, siteKeys)

    let statusKeys = Object.keys(property.status)
    let statusVals = this.getVals(property.status, statusKeys)

    let valuationKeys = Object.keys(property.status)
    let valuationVals = this.getVals(property.status, valuationKeys)

    let compVals = this.getNestedCompVals(property.comparables)


    return <div className="table-container">
      <div className="table-table">
        <h3>Address</h3>
        <table>
          {addressVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Boundaries</h3>
        <table>
          {boundVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Comparables</h3>
        <table>
          {compVals}
        </table>
      </div>

      <div className="table-table">
        <h3>MetaData</h3>
        <table>
          {metaVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Postal</h3>
        <table>
          {postVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Site</h3>
        <table>
          {siteVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Status</h3>
        <table>
          {statusVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Valuation</h3>
        <table>
          {valuationVals}
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

  getNestedCompVals(vals) {
    let items = [];
    for (let i = 0; i < vals.length; i++) {
      let met = Object.keys(vals[i].property.metadata)
      let address = Object.keys(vals[i].property.address)

      for (let j = 0; j < met.length; j++) {
        let val = vals[i].property.metadata[met[j]];
        if(val === null) {
          val = "n/a"
        }
        items.push(<tr key={i}>
          <td>{met[j]}</td>
          <td>{vals[i].property.metadata[met[j]]}</td>
        </tr>);
      }

      for (let k = 0; k < address.length; k++) {
        let val = vals[i].property.address[address[k]];
        if(val === null) {
          val = "n/a"
        }
        items.push(<tr key={i}>
          <td>{address[k]}</td>
          <td>{vals[i].property.address[address[k]]}</td>
        </tr>);

        if(address[k] === "longitude" && (vals.length > 1) && (i < vals.length - 1)) {
          items.push(<tr key={i}>
            <td className="rowseperator"></td>
            <td className="rowseperator"></td>
          </tr>)
        }
      }
      return items;

    }
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
