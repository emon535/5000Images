import React, { Component } from "react";
import DataTableView from "./DataTableView";
import DataService from "./../../Services/DataService/DataService";

class DataTable extends Component {
  constructor(props) {
    super(props);
    console.log("From DataTable", this.props.data);
    this.state = {
      data: []
    };

    this.DataService = new DataService();
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
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

  render() {
    return <DataTableView {...this.state} />;
  }
}

export default DataTable;
