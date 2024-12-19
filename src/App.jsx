import React from "react";
import Index1 from "./components/section1";
import Index2 from "./components/section2";
import Index3 from "./components/section3";
import Index4 from "./components/section4";
import Index5 from "./components/section5";

const App = () => {
  return (
    <div className="flex flex-col gap-3 py-2 px-2 bg-[#e4e5dc]">
      <Index1 />
      <Index2 />
      <Index3 />
      <Index4 />
      <Index5 />
    </div>
  );
};

export default App;
