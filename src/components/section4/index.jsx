import "./style.css";
//motion
import { motion } from "framer-motion";
//utils
import { fadeIn } from "../../utils";
const index = () => {
  return (
    <section className="container-section4">
      <div className=" hidden flex-1 md:flex flex-col justify-between text-center py-8 px-20 bg-[#EAFE63] rounded-[20px]">
        <div className="h-full flex justify-between flex-col items-center">
          <div className="w-full h-[3px] bg-[#dbdbde] rounded-full">
            <div className="h-[3px] w-[150px] bg-black rounded-full"></div>
          </div>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-5xl font-normal leading-none "
          >
            Tack your healt <br /> progress
          </motion.h2>
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

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h-full flex justify-between items-center flex-col pt-7"
        >
          <h2 className="text-[#515151] font-sans text-lg">
            Stay on top of your goals with our intuitive health <br /> tracking
            tools. Monitor your workouts nutrition,
            <br /> and overall well-being effortlessly.
          </h2>
          <button className="bg-[#FFFF] h-12 w-full px-2 rounded-full text-black text-sm font-semibold cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
            DISCOVER MORE
          </button>
        </motion.div>
      </div>
      <div
        id="container-right"
        className="flex-[2] rounded-[20px] flex flex-col md:flex-row items-end py-8 px-4 md:px-20"
      >
        <div className="flex flex-col md:flex-row justify-between w-full items-end">
          <p className="hidden md:block text-4xl text-white">
            3 <span className="text-[#515151]">/4</span>
          </p>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col gap-4 w-full md:w-96"
          >
            <div className="bg-[#EAFE63] h-48 p-4 flex flex-col justify-between rounded-[20px]">
              <div>
                <h2 className="text-[#515151] text-md font-normal">
                  Health & fitness
                </h2>
                <p className="text-black text-6xl">
                  87 <span className="text-xl text-[#515151]">%</span>
                </p>
              </div>
              <div>
                <p className="flex justify-end text-black text-lg font-medium cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  0,9%
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] h-48 py-4 px-6">
              <h2 className="mb-3">Routine</h2>
              <div className="flex items-center gap-3 md:mb-2 flex-wrap">
                <button className="text-black bg-[#EAFE63] py-2 px-4 text-sm rounded-[20px] font-medium cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
                  Exercise
                </button>
                <button className="py-2 px-4 text-sm rounded-[20px] font-medium border-2 text-[#515151] cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
                  Healthy food
                </button>
                <button className="py-2 px-4 text-sm rounded-[20px] font-medium border-2 text-[#515151] cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300">
                  Gym
                </button>
              </div>
              <div className="hidden md:flex rounded bg-[#f8f8ff] p-3  flex-col gap-2">
                <h2 className="text-sm text-[#515151] font-medium">
                  3km run today
                </h2>
                <div className=" w-full border-2 h-6 rounded-full">
                  <div className="bg-[#EAFE63] w-20 h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default index;
