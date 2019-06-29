import React from "react";
import "./App.css";
import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";

const Images = lazy(() => import("./Components/ImageList"));

function App() {
  const greeting = "Hello";
  return (
    <div className="App">
      <h1 className="heading">Latest Albums</h1>
      <Suspense fallback={ClipLoader}>
        <Images greeting={greeting} />
      </Suspense>
    </div>
  );
}

export default App;
