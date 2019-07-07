import React, { Component } from "react";
import DataTableView from "./DataTableView";
import DataService from "./../../Services/DataService/DataService";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.DataService = new DataService();
    this.getData = this.getData.bind(this);

    this._onRowClick = this._onRowClick.bind(this);
  }

  getData() {
    this.DataService.getRequiredData().then(data => {
      console.log("Getting Data");
      this.setState({
        data: data
      });
      console.log("Updated Data", this.state.data);
    });
  }

  componentDidMount() {
    this.getData();
  }

  _onRowClick(e, t, rowInfo) {
    this.props._rowClickHandler(rowInfo);
  }

  render() {
    return <DataTableView {...this.props}{...this.state} _onRowClick={this._onRowClick} />;
  }
}

export default DataTable;
