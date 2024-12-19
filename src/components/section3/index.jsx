import React from "react";
import "./style.css";

const Index = () => {
  return (
    <section className="container-section3">
      <div className="flex flex-col justify-center items-center bg-[#EAFE63] h-full rounded-[20px]">
        <h2 className="text-xl  md:text-6xl text-center font-medium  mb-4  max-w-7xl">
          Join our community and embarkon your journey to optimal fitness{" "}
          <span>&</span> health!
        </h2>

        <p className="text-xs mb-4 md:text-lg font-sans text-center">
          Sign up for our waitlist now to be the first to access exclusive
          content
        </p>
        <button className="bg-[#FFFF] h-12 w-[160px]  px-2 rounded-full text-black text-sm font-semibold">
          JOIN NOW
        </button>
      </div>
    </section>
  );
};

export default Index;
