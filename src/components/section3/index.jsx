import "./style.css";
//motion
import { motion } from "framer-motion";
//utils
import { fadeIn } from "../../utils.js";

const Index = () => {
  return (
    <section className="container-section3">
      <div className="flex flex-col justify-center items-center bg-[#EAFE63] h-full rounded-[20px]">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-xl  md:text-6xl text-center font-medium  mb-4  max-w-7xl"
        >
          Join our community and embarkon your journey to optimal fitness{" "}
          <motion.span
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            &
          </motion.span>{" "}
          health!
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-xs mb-4 md:text-lg font-sans text-center"
        >
          Sign up for our waitlist now to be the first to access exclusive
          content
        </motion.p>
        <motion.button
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="bg-[#FFFF] h-12 w-[160px]  px-2 rounded-full text-black text-sm font-semibold cursor-pointer transform hover:translate-y-1 hover:scale-105 transition-all duration-300"
        >
          JOIN NOW
        </motion.button>
      </div>
    </section>
  );
};

export default Index;
