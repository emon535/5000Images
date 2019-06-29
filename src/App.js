import React, { Component } from "react";
import "./App.css";
import { Suspense, lazy } from "react";
const DataTable = lazy(() => import("./Components/DataTable/DataTable"));
const Images = lazy(() => import("./Components/ImageList/ImageList"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">Latest Albums</h1>
        <Suspense fallback="Loading..">
          {/* <Images /> */}
          <DataTable />
        </Suspense>
      </div>
    );
  }
}

export default App;
