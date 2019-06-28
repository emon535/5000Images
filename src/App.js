import React from "react";
import "./App.css";
import { Suspense, lazy } from "react";
const Images = React.lazy(() => import("./Components/ImageList"));
// import Images from "./Components/ImageList";

function App() {
  return (
    <div className="App">
      <h1>5000 Images</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Images />
      </Suspense>
    </div>
  );
}

export default App;
