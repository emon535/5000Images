import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container } from "reactstrap";
import "./DataTableView.css";
import AlbumInfo from "../AlbumInfo/AlbumInfo";

class DataTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlbumInfo: false,
      selected: null,
      rowInfo: null,
      columns: [
        {
          id: "id",
          Header: props => <span>ID</span>,
          accessor: d => d.id,
          width: 80
        },
        {
          id: "image",
          Header: props => <span>Photo</span>,
          accessor: d => {
            return (
              <div>
                <img className="images" height={34} src={d.thumbnailUrl} />
              </div>
            );
          },
          width: 120
        },
        {
          id: "name",
          Header: "Name",
          accessor: d => d.title.toUpperCase(),
          width: 330
        },
        {
          id: "code",
          Header: "Code",
          accessor: d => " Color Code = #" + d.url.toUpperCase().slice(32, 100),
          width: 150
        },
        {
          id: "description",
          Header: "URL",
          accessor: d => d.url,
          width: 250
        }
      ],
      pageSizeOptions: [100, 250, 500, 1000, 5000],
      defaultResized: [100, 100, 10, 1]
    };

    this._onRowClick = this._onRowClick.bind(this);
    this.onHideClick = this.onHideClick.bind(this);
  }

  _showAlbumInfo() {
    return (
      this.state.showAlbumInfo && (
        <AlbumInfo
          rowInfo={this.state.rowInfo}
          onHideClick={() => this.onHideClick()}
        />
      )
    );
  }

  onHideClick() {
    return this.setState({
      showAlbumInfo: false
    });
  }

  _onRowClick(e, t, rowInfo) {
    this.setState({
      selected: rowInfo.index,
      showAlbumInfo: true,
      rowInfo: rowInfo.original
    });
    console.log(rowInfo, e, t, rowInfo.original.url, rowInfo.original.id);
  }

  render() {
    console.log(this.props);
    console.log("from view ", this.props.data);
    return (
      <React.Fragment>
        {this._showAlbumInfo()}
        <Container className="container-class">
          <ReactTable
            className="-striped -highlight"
            resizable={true}
            defaultResized={this.state.defaultResized}
            showPageJump
            defaultPageSize={50}
            data={this.props.data}
            columns={this.state.columns}
            pageSizeOptions={this.state.pageSizeOptions}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: (e, t) => {
                  this._onRowClick(e, t, rowInfo);
                },
                style: {
                  background: rowInfo && state.selected ? "green" : "#6c757d"
                }
              };
            }}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default DataTableView;
