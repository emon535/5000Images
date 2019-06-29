import React, { Component } from "react";

import { Spinner, Footer } from "reactstrap";
import { Suspense, lazy } from "react";
import "./App.css";

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
  render() {
    return (
      <div className="App">
        <h1 className="heading">Latest Albums</h1>
        <Suspense fallback={this._getLoader()}>
          {/* <Images /> */}
          <DataTable />
        </Suspense>
      </div>
    );
  }
}

export default App;
