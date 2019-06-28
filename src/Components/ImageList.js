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
      numberOfItemPerPage: 200,
      startIndex: 0,
      endIndex: 10
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
          <Col sm={4} className="imageBox">
            <div className="title">{eachperson.title}</div>
            <img className="images" src={eachperson.url} />
          </Col>
        </React.Fragment>
      ));
  }

  componentWillReceiveProps(nextProp) {
    let endIndex = this.state.startIndex + this.state.numberOfItemPerPage;
    this.setState({
      endIndex
    });
  }

  handleChangePage(startIndex, endIndex) {
    console.log("from HandlePage", startIndex, endIndex);
    this.setState({ startIndex, endIndex });
  }

  render() {
    return (
      <Container>
        Image List
        <Row>{this._getImageList(this.state.persons)}</Row>
        <Row>
          <Col sm={12}>
            <Paginator
              listLength={this.state.persons.length}
              numberOfItemPerPage={this.state.numberOfItemPerPage}
              handleChangePage={() => this.state.handleChangePage()}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageList;
