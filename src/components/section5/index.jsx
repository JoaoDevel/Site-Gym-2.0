import React from "react";
import LogoBlack from "../../assets/logoblack.png";
import "./style.css";

const index = () => {
  return (
    <div
      id="container-section5"
      className="flex justify-between flex-col gap-14 py-10 px-24"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-black text-4xl font-bold leading-normal">
          Join our newsletterto <br /> keep up to date with us!
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex w-80  items-center gap-4 py-3 px-3 border-[2px]  rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none "
            />
          </div>
          <button className="flex bg-[#EAFE63] py-3 px-5 rounded-full text-black text-md font-medium">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center py-20 border-y-[2px] border-[#E5E7EB]">
        <img
          src={LogoBlack}
          alt=""
          className="w-[110px] h-[110px] cursor-pointer"
        />
        <div className="flex gap-14 items-center">
          <ul className="flex flex-col gap-5 text-black font-normal text-xl">
            <li>Platform</li>
            <li>Plans & Pricing</li>
            <li>Personal AI Manager</li>
            <li>AI Business Writer</li>
          </ul>
          <ul className="flex flex-col gap-5 text-black font-normal text-xl">
            <li>Company</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
          <ul className="flex flex-col gap-5 text-black font-normal text-xl">
            <li>Resources</li>
            <li>Documentation</li>
            <li>Papers</li>
            <li>Press Conferences</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-black font-normal text-lg">&copy; 2024 Gym Inc.</h2>
        <ul className="flex gap-9 text-black font-normal text-lg">
          <li className="cursor-pointer">Term of Service</li>
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default index;
