import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import "./ImageList.css";

class ImageList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  _getImageList(images) {
    return images.map(eachperson => (
      <React.Fragment>
        <Col sm={4} className="imageBox">
          <div className="title">{eachperson.title}</div>
          <img className="images" src={eachperson.url} />
        </Col>
      </React.Fragment>
    ));
  }

  render() {
    return (
      <Container>
        Image List
        <Row>{this._getImageList(this.state.persons)}</Row>
      </Container>
    );
  }
}

export default ImageList;
