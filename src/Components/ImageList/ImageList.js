import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container, Table } from "reactstrap";
import "./ImageList.css";
import Paginator from "../Paginator/Paginator";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      numberOfItemPerPage: 250,
      startIndex: 0,
      endIndex: 250
    };

    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  _getImageList(images) {
    return images
      .slice(this.state.startIndex, this.state.endIndex)
      .map((eachperson, index) => (
        <React.Fragment>
          <tr>
            <th className="clickable-row" scope="row">
              {eachperson.id}
            </th>
            <td>
              <img className="images" src={eachperson.thumbnailUrl} />
            </td>
            <td>
              <div className="title">{eachperson.title}</div>
            </td>
            <td>
              <div className="title">{eachperson.albumId}</div>
            </td>
          </tr>
        </React.Fragment>
      ));
  }

  handleChangePage = (startIndex, endIndex) => {
    console.log("from HandlePage", startIndex, endIndex);
    this.setState({ startIndex, endIndex });
  };

  _getPaginator() {
    return (
      <Col sm={12}>
        <Paginator
          listLength={this.state.persons.length}
          numberOfItemPerPage={this.state.numberOfItemPerPage}
          // handleChangePage={this.state.handleChangePage}
          handleChangePage={this.handleChangePage}
        />
      </Col>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Table dark striped hover size="sm">
            <thead />
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <tbody>{this._getImageList(this.state.persons)}</tbody>
          </Table>
        </Container>
        <div classID="justify-content-center">{this._getPaginator()}</div>
      </React.Fragment>
    );
  }
}

export default ImageList;
