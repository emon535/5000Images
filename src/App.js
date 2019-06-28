import React from "react";
import "./App.css";
import { Suspense, lazy } from "react";
const Images = lazy(() => import("./Components/ImageList"));
// import Images from "./Components/ImageList";

function App() {
  const greeting = "Hello";
  return (
    <div className="App">
      <h1 className="heading">5000 Images</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Images greeting={greeting} />
      </Suspense>
    </div>
  );
}

export default App;
