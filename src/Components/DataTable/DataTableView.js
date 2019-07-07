import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./DataTableView.css";
import AlbumInfo from "../AlbumInfo/AlbumInfo";

class DataTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      rowSelected: null,
      selectionChanged: false,
      columns: [
        {
          id: "id",
          width: 50,
          Header: props => <span>ID</span>,
          accessor: d => d.id,
          getProps: (state, rowInfo, column) => {
            return {
              style: {
                textAlign: "center"
              }
            };
          }
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

          getProps: (state, rowInfo, column) => {
            return {
              style: {
                textAlign: "center"
              }
            };
          }
        },
        {
          id: "name",
          Header: "Name",
          accessor: d => d.title.toUpperCase()
        },
        {
          id: "code",
          Header: "Code",
          accessor: d => " Color Code = #" + d.url.toUpperCase().slice(32, 100)
        },
        {
          id: "description",
          Header: "URL",
          accessor: d => d.url
        }
      ],
      pageSizeOptions: [100, 250, 500, 1000, 5000]
    };
  }

  render() {
    console.log(this.props);
    console.log("show pagination", this.props.showPagination);
    return (
      <React.Fragment>
        <ReactTable
          className="-striped -highlight"
          resizable={true}
          showPageJump
          showPagination={this.props.showPagination}
          pageSize={this.props.showPagination ? 50 : this.props.data.length}
          // defaultPageSize={500}
          data={this.props.data}
          columns={this.state.columns}
          pageSizeOptions={this.state.pageSizeOptions}
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e, t) => {
                  this.props._onRowClick(e, t, rowInfo);
                  if (rowInfo.index !== this.state.rowSelected) {
                    this.setState({
                      rowSelected: rowInfo.index,
                      selectionChanged: this.state.selectionChanged
                        ? false
                        : true
                    });
                  } else {
                    this.setState({
                      rowSelected: null
                    });
                  }
                },
                style: {
                  background:
                    rowInfo.index === this.state.rowSelected
                      ? "#eaeaea"
                      : "white",
                  color: "#444444"
                }
              };
            } else {
              return {};
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default DataTableView;
