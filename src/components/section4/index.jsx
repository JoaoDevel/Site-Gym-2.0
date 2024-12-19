import React from "react";
import "./style.css";

const index = () => {
  return (
    <section className="container-section4">
      <div className=" hidden flex-1 md:flex flex-col justify-between text-center py-8 px-20 bg-[#EAFE63] rounded-[20px]">
        <div className="h-full flex justify-between flex-col items-center">
          <div className="w-full h-[3px] bg-[#dbdbde] rounded-full">
            <div className="h-[3px] w-[150px] bg-black rounded-full"></div>
          </div>
          <h2 className="text-5xl font-normal leading-none ">
            Tack your healt <br /> progress
          </h2>
          <div className="flex gap-4 justify-between w-full items-center">
            <div className="h-[3px]  bg-[#dbdbde] flex-grow "></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dbdbde"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-triangle"
            >
              <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            </svg>
            <div className="h-[3px] bg-[#dbdbde] flex-grow  "></div>
          </div>
        </div>

        <div className="h-full flex justify-between items-center flex-col pt-7">
          <h2 className="text-[#515151] font-sans text-lg">
            Stay on top of your goals with our intuitive health <br /> tracking
            tools. Monitor your workouts nutrition,
            <br /> and overall well-being effortlessly.
          </h2>
          <button className="bg-[#FFFF] h-12 w-full px-2 rounded-full text-black text-sm font-semibold">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div
        id="container-right"
        className="flex-[2] rounded-[20px] flex items-end py-8 px-20"
      >
        <div className="flex justify-between w-full items-end">
          <p className="hidden md:block text-4xl text-white">
            3 <span className="text-[#515151]">/4</span>
          </p>

          <div className="flex flex-col gap-4 w-96 ">
            <div className="bg-[#EAFE63]  h-48 p-4 flex flex-col justify-between rounded-[20px]">
              <div>
                <h2 className="text-[#515151] text-md font-normal">
                  Health & fitness
                </h2>
                <p className="text-black text-6xl">
                  87 <span className="text-xl text-[#515151]">%</span>
                </p>
              </div>

              <div>
                <p className="flex justify-end text-black text-lg font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  0,9%
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] h-48 py-4 px-6 ">
              <h2 className="mb-3">Routine</h2>
              <div className="flex items-center gap-3 mb-2">
                <button className="text-black bg-[#EAFE63] py-2 px-4 text-sm rounded-[20px] font-medium">
                  Exercise
                </button>
                <button className="py-2 px-4 text-sm rounded-[20px] font-medium border-2 text-[#515151]">
                  Healthy food
                </button>
                <button className="py-2 px-4 text-sm rounded-[20px] font-medium border-2 text-[#515151]">
                  Gym
                </button>
              </div>
              <div className="rounded bg-[#f8f8ff] p-3 flex flex-col gap-2">
                <h2 className="text-sm text-[#515151] font-medium">
                  3km run today
                </h2>
                <div className="w-full border-2 h-6 rounded-full">
                  <div className="bg-[#EAFE63] w-20 h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
