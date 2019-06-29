import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "reactstrap";

class DataTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSizeOptions: [100, 250, 500, 1000, 5000]
    };
  }

  render() {
    console.log(this.props);
    console.log("from view ", this.props.data);
    return (
      <React.Fragment>
        DataTableView
        <Container className="container-class">
          <ReactTable
            defaultPageSize={50}
            data={this.props.data}
            columns={this.props.columns}
            pageSizeOptions={this.state.pageSizeOptions}
            className="-striped -highlight"
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default DataTableView;
