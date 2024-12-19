import React from "react";
import "./style.css";
import Logo from "../../assets/logogym.png";
import Img from "../../assets/imglogo.jpg";

const Index = () => {
  return (
    <section className="container-section1">
      <header className="flex justify-between items-center">
        <img src={Logo} alt="" className="w-[90px] h-[90px] cursor-pointer" />
        <nav className="hidden md:flex flex-row gap-7 text-white  text-md font-normal">
          <a
            href=""
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Find Home
          </a>
          <a
            href=""
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Pratise
          </a>
          <a
            href=""
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Health Hub
          </a>
          <a
            href=""
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Why Fintoo
          </a>
        </nav>

        <div className="flex gap-2 items-center">
          <button className="hidden md:flex bg-[#EAFE63] py-2 px-5 rounded-full text-black text-md font-medium">
            Start your journey
          </button>

          <svg
            className="block cursor-pointer md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </header>
      <div>
        <h1 className=" text-4xl md:text-7xl text-white">
          Unlock your potencial,
          <br />
          fitness <span>&</span> health hub.
        </h1>

        <p className="mt-5 max-w-[640px] text-white font-light text-sm md:text-[13px]">
          Every rep, every drop of sweat, every minute in the gym brings you
          closer to your goal. Remember, it's not just about lifting weights,
          but about lifting yourself up to every challenge.Let's go, you got
          this!
        </p>

        <div className="flex justify-between items-center mt-9">
          <button className="bg-[#EAFE63] h-12 w-[160px]   px-2 rounded-full text-black text-sm font-normal">
            LEARN MORE
          </button>

          <button className="md:flex justify-between gap-4 h-12 w-[180px] px-2 items-center bg-[#FFFFFF] text-[#A6B1B7] rounded-full hidden">
            <span className="flex-1 text-center">watch video</span>
            <img src={Img} alt="" className="w-9 h-9 rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
