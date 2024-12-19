import React from "react";
import Index1 from "./components/section1";
import Index2 from "./components/section2";
import Index3 from "./components/section3";

const App = () => {
  return (
    <div className="flex flex-col gap-5 py-2 px-2 bg-[#e4e5dc]">
      <Index1 />
      <Index2 />
      <Index3 />
    </div>
  );
};

export default App;
