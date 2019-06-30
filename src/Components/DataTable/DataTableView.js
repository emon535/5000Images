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
      rowEdit: null,
      selectionChanged: false,
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
                <img className="images" height={30} src={d.thumbnailUrl} />
              </div>
            );
          },
          width: 120
        },
        {
          id: "name",
          Header: "Name",
          accessor: d => d.title.toUpperCase(),
          width: 400
        },
        {
          id: "code",
          Header: "Code",
          accessor: d => " Color Code = #" + d.url.toUpperCase().slice(32, 100),
          width: 180
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
            getTrProps={(state, rowInfo) => {
              if (rowInfo && rowInfo.row) {
                return {
                  onClick: (e, t) => {
                    console.log("inside");
                    this._onRowClick(e, t, rowInfo);
                    if (rowInfo.index != this.state.rowEdit) {
                      this.setState({
                        rowEdit: rowInfo.index,
                        selectedRowIndex: rowInfo.original,
                        selectionChanged: this.state.selectionChanged
                          ? false
                          : true
                      });
                    } else {
                      this.setState({
                        rowEdit: null
                      });
                    }
                    console.log(rowInfo.index);
                    console.log(this.state.rowEdit);
                  },
                  style: {
                    background:
                      rowInfo.index === this.state.rowEdit ? "#2f3238" : "white",
                    color:
                      rowInfo.index === this.state.rowEdit ? "white" : "black"
                  }
                };
              } else {
                return {};
              }
            }}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default DataTableView;
