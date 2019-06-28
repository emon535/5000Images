import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import "./ImageList.css";
import Paginator from "./../Paginator/Paginator";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      numberOfItemPerPage: 90,
      startIndex: 0,
      endIndex: 90
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
      .map(eachperson => (
        <React.Fragment>
          <Col sm={4}>
            <div className="imageBox">
              <img className="images" src={eachperson.url} />
              <div className="title">{eachperson.title}</div>
            </div>
          </Col>
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
      <Container>
        <Row>{this._getImageList(this.state.persons)}</Row>

        <Row>{this._getPaginator()}</Row>
      </Container>
    );
  }
}

export default ImageList;
