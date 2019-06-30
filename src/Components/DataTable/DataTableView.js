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
      rowEdit: null,
      selectionChanged: false,
      columns: [
        {
          id: "id",
          Header: props => <span>ID</span>,
          accessor: d => d.id,
          width: "10%",
          getProps: (state, rowInfo, column) => {
            return {
              style: {
                textAlign: "center"
              },
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
              },
            };
          }
        },
        {
          id: "name",
          Header: "Name",

          accessor: d => d.title.toUpperCase(),

        },
        {
          id: "code",
          Header: "Code",
          accessor: d => " Color Code = #" + d.url.toUpperCase().slice(32, 100),

        },
        {
          id: "description",
          Header: "URL",

          accessor: d => d.url,

        }
      ],
      pageSizeOptions: [100, 250, 500, 1000, 5000],
    };

  }

  render() {
    console.log(this.props);
    console.log("from view ", this.props.data);
    return (
      <React.Fragment>
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
                  this.props._onRowClick(e, t, rowInfo);
                  if (rowInfo.index !== this.state.rowEdit) {
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

                },
                style: {
                  background:
                    rowInfo.index === this.state.rowEdit ? "#eaeaea" : "white",
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
