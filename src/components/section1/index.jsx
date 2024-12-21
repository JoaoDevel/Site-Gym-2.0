import "./style.css";
import Logo from "../../assets/logogym.png";
import Img from "../../assets/imglogo.jpg";
import menu from "../../assets/menuhamburguer.png";
import closer from "../../assets/closer.png";
//motion
import { motion } from "framer-motion";
// utils
import { fadeIn } from "../../utils.js";

import { useState } from "react";

const Index = () => {
  const [ShowModel, setShowModel] = useState(false);

  const handleOpen = () => setShowModel(true);
  const handleCloser = () => setShowModel(false);

  return (
    <section className="container-section1 overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[0]"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {ShowModel && (
        <div
          id="menu-modal"
          className="bg-[#363636] bg-opacity-90 flex justify-center items-center w-full h-80 absolute z-10 top-0 left-0 py-7 px-4 rounded-b-3xl"
        >
          <ul className="text-white text-md font-normal flex flex-col gap-9">
            <li className="pb-2 border-b-2 border-transparent hover:border-white">
              Find Homes
            </li>
            <li className="pb-2 border-b-2 border-transparent hover:border-white">
              Pratise
            </li>
            <li className="pb-2 border-b-2 border-transparent hover:border-white">
              Health Hub
            </li>
            <li className="pb-2 border-b-2 border-transparent hover:border-white">
              Why Gym
            </li>
          </ul>
          <button
            onClick={handleCloser}
            className="absolute top-3 right-3 transform transition-transform duration-300 hover:scale-110"
          >
            <img src={closer} alt="Close" />
          </button>
        </div>
      )}

      <motion.header
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-between items-center relative z-10"
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-[90px] h-[90px] cursor-pointer"
        />
        <nav className="hidden md:flex flex-row gap-7 text-white text-md font-normal">
          <a
            href=""
            className="py-2 border-b-2 border-transparent hover:border-white"
          >
            Find Homes
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
          <button className="hidden md:flex bg-[#EAFE63] py-2 px-5 rounded-full text-black text-md font-medium cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
            Start your journey
          </button>
          {!ShowModel && (
            <img src={menu} onClick={handleOpen} className="flex md:hidden" />
          )}
        </div>
      </motion.header>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-7xl text-white">
          Unlock your potential,
          <br />
          fitness <span>&</span> health hub.
        </h1>
        <p className="mt-5 max-w-[640px] text-white font-light text-sm md:text-[13px]">
          Every rep, every drop of sweat, every minute in the gym brings you
          closer to your goal. Remember, it´s not just about lifting weights,
          but about lifting yourself up to every challenge. Let´s go, you got
          this!
        </p>
        <div className="flex justify-between items-center mt-9">
          <button className="bg-[#EAFE63] h-12 w-[160px] px-2 rounded-full text-black text-sm font-normal cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
            LEARN MORE
          </button>
          <button className="md:flex justify-between gap-4 h-12 w-[180px] px-2 items-center bg-[#FFFFFF] text-[#A6B1B7] rounded-full hidden cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
            <span className="flex-1 text-center">Watch Video</span>
            <img src={Img} alt="Thumbnail" className="w-9 h-9 rounded-full" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Index;
