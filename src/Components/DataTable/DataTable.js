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
    this._getData = this._getData.bind(this);

    this.onRowClick = this.onRowClick.bind(this);
  }

  _getData() {
    this.DataService.getRequiredData().then(data => {
      console.log("Getting Data");
      this.setState({
        data: data
      });
      console.log("Updated Data", this.state.data);
    });
  }

  componentDidMount() {
    this._getData();
  }

  onRowClick(e, t, rowInfo) {
    this.props.rowClickHandler(rowInfo);
  }

  render() {
    return <DataTableView {...this.state} onRowClick={this.onRowClick} />;
  }
}

export default DataTable;
