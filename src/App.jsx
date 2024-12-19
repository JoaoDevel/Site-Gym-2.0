import React from "react";
import "./app.css";
import Index1 from "./components/section1";
import Index2 from "./components/section2";
import Index3 from "./components/section3";

const App = () => {
  return (
    <div className="container">
      <Index1 />
      <Index2 />
      <Index3 />
    </div>
  );
};

export default App;
