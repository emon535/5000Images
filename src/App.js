import React, { Component } from "react";
import { Spinner } from "reactstrap";
import { Suspense, lazy } from "react";
import "./App.css";
import BackToTop from "react-back-to-top-button";
import { FaChevronCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const DataTable = lazy(() => import("./Components/DataTable/DataTable"));
const Images = lazy(() => import("./Components/ImageList/ImageList"));

class App extends Component {
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
      <BackToTop
        className="up-button"
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <IconContext.Provider value={{ color: "#f2f2f2" }}>
          <FaChevronCircleUp />
        </IconContext.Provider>
      </BackToTop>
    );
  }

  _getFooter() {
    return (
      <div className="footer">
        <br />
        <br />
        <hr className="light-white-line" />
        Powered by Foysal Ahemd Emon
        <br />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">Latest Albums</h1>
        <Suspense fallback={this._getLoader()}>
          {/* <Images /> */}
          <DataTable />
        </Suspense>
        {this._getBackToTopButton()}
        {this._getFooter()}
      </div>
    );
  }
}

export default App;
