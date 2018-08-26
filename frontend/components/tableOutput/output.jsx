import React from 'react';

class OutputTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
    this.getVals = this.getVals.bind(this);
    this.getNestedCompVals = this.getNestedCompVals.bind(this);
    this.getNestedVals = this.getNestedVals.bind(this);
    this.filter = this.filter.bind(this);
    this.displayResult = this.displayResult.bind(this);
    this.unhideAll = this.unhideAll.bind(this);
    this.unhideTable = this.unhideTable.bind(this);
    this.checkRows = this.checkRows.bind(this);
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
    let mortgageVals = this.getNestedVals(property.mortgages)
    let ownersVals = this.getNestedVals(property.owners)
    let salesVals = this.getNestedVals(property.sales)
    let structuresVals = this.getNestedVals(property.structures)
    let taxesVals = this.getNestedVals(property.taxes)


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
        <h3>Mortgages</h3>
        <table>
          {mortgageVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Status</h3>
        <table>
          {statusVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Postal</h3>
        <table>
          {postVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Sales</h3>
        <table>
          {salesVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Site</h3>
        <table>
          {siteVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Owners</h3>
        <table>
          {ownersVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Structures</h3>
        <table>
          {structuresVals}
        </table>
      </div>

      <div className="table-table">
        <h3>Taxes</h3>
        <table>
          {taxesVals}
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

  getNestedVals(vals) {
    let items = [];
    for (let i = 0; i < vals.length; i++) {
      let el = vals[i]
      let keys = Object.keys(vals[i]);
      for (let j = 0; j < keys.length; j++) {
        items.push(<tr key={i}>
          <td>{keys[j]}</td>
          <td>{vals[i][keys[j]]}</td>
        </tr>);

        if(j === keys.length - 1) {
          items.push(<tr key={i}>
            <td className="rowseperator"></td>
            <td className="rowseperator"></td>
          </tr>)
        }
      }
    }
    return items
  }

  filter(e) {
    this.setState({filter: e.currentTarget.value})
    this.displayResult(e.currentTarget.value)
  }

  displayResult(filter) {
    if(filter === "") {
      this.unhideAll();
    } else {
      let allTables = $(".table-table");
      for (let i = 0; i < allTables.length; i++) {
        let currentTable = allTables[i];
        let currentHeader = $(currentTable).children()[0].innerHTML
        if(currentHeader.toLowerCase().includes(filter.toLowerCase())) {
          this.unhideTable(currentTable);
        } else {
          this.checkRows(filter, currentTable);
        }
      }
    }
  }

  checkRows(filter, Table) {
    let rows = $($(Table).children()[1]).children();
    let empty = 0;
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].children[0].innerText;
      let rowEl = rows[i];
      if(rowText.toLowerCase().includes(filter)) {
        $(Table).show()
        $(rowEl).show()
        $(rowEl).children().show()
      } else {
        $(rowEl).hide()
        empty+= 1;
      }
    }
    if(rows.length === empty) {
      $(Table).hide()
    }
  }

  unhideTable(Table) {
    $(Table).show()
    $(Table).children().show()
    $($(Table).children()[0]).show()
    $($(Table).children()[1]).children().show()
  }

  unhideAll() {
    let allTables = $(".table-container").children();
    for (let i = 0; i < allTables.length; i++) {
      let currentTable = allTables[i];
      $(currentTable).show()
      $($(currentTable).children()[0]).show()
      $($(currentTable).children()[1]).children().show()
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
      return <div className="result-container">
        <input className="filter" onChange={this.filter} placeholder="Filter"></input>
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
