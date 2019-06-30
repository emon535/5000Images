import React, { Component } from "react";
import DataTableView from "./DataTableView";
import DataService from "./../../Services/DataService/DataService";

class DataTable extends Component {
  constructor(props) {
    super(props);
    console.log("From DataTable", this.props.data);
    this.state = {
      data: [],
      rowInfo: {
        index: 1
      },
      showAlbumInfo: this.props.showAlbumInfo
    };

    this.DataService = new DataService();
    this.getData = this.getData.bind(this);
    this._passRowInfo = this._passRowInfo.bind(this);

    this._onRowClick = this._onRowClick.bind(this);
  }


  componentDidMount() {
    this.getData();
  }



  _onRowClick(e, t, rowInfo) {
    console.log("from DataTable", rowInfo)
    this.setState({
      selected: rowInfo.index,
      showAlbumInfo: true,
      rowInfo: rowInfo.original
    });
    this.props._rowClickHandler(rowInfo);

  }

  _passRowInfo() {
    this.setState({
      rowInfo: this.props.rowInfo
    })
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
    return <DataTableView {...this.state} _onRowClick={this._onRowClick} />;
  }
}

export default DataTable;
