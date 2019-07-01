import React, { Component } from "react";
import { Spinner, Container, Row, Col } from "reactstrap";
import { Suspense, lazy } from "react";
import "./App.css";
import BackToTop from "react-back-to-top-button";
import { FaChevronCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import AlbumInfo from "./Components/AlbumInfo/AlbumInfo";

const DataTable = lazy(() => import("./Components/DataTable/DataTable"));
// const Images = lazy(() => import("./Components/ImageList/ImageList"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlbumInfo: true,
      rowInfo: {
        id: 0,
        title: "Some Title",
        thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
        url: "www.foysalahmed.net"
      }
    };

    this._showAlbumInfo = this._showAlbumInfo.bind(this);
    this.onHideClick = this.onHideClick.bind(this);
    this.rowClickHandler = this.rowClickHandler.bind(this);
  }

  _showAlbumInfo() {
    return (
      this.state.showAlbumInfo && (
        <AlbumInfo {...this.state} onHideClick={this.onHideClick} />
      )
    );
  }

  onHideClick() {
    return this.setState({
      showAlbumInfo: false
    });
  }

  rowClickHandler(rowInfo) {
    console.log("from APP, Rowinfo", rowInfo);
    this.setState({
      rowInfo: rowInfo.original,
      showAlbumInfo: true
    });
  }

  _getLoader() {
    return (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    );
  }

  _getBackToTopButton() {
    return (
      <BackToTop showAt={100} speed={1500} easing="easeInOutQuint">
        <IconContext.Provider value={{ color: "#444444" }}>
          <FaChevronCircleUp />
        </IconContext.Provider>
      </BackToTop>
    );
  }

  _getFooter() {
    return (
      <div className="footer">
        <hr />
        Powered by Foysal Ahemd Emon
      </div>
    );
  }

  render() {
    const colSize = this.state.showAlbumInfo ? 8 : 12;
    return (
      <div className="App">
        <Container className="container-class">
          <Row>
            <Col sm={12}>
              <h1 className="heading">Latest Albums</h1>
            </Col>
            <Col sm={colSize}>
              <Suspense fallback={this._getLoader()}>
                <DataTable
                  {...this.state}
                  rowClickHandler={rowInfo => this.rowClickHandler(rowInfo)}
                />
              </Suspense>
            </Col>
            <Col sm={4}>{this._showAlbumInfo()}</Col>
          </Row>
          {this._getBackToTopButton()}
          {this._getFooter()}
        </Container>
      </div>
    );
  }
}

export default App;
