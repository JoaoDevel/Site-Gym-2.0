import { Activity, CircleArrowLeft, CircleCheck, Dumbbell } from "lucide-react";
import "./style.css";
//motion
import { motion } from "framer-motion";
//utils
import { fadeIn } from "../../utils.js";

import WomanImage from "../../../src/assets/womangym.png";

const Index = () => {
  return (
    <section className="container-section2">
      {/**HERE IS THE TITTLE */}
      <section className="title">
        <h1 className="tittle-text">Why gym space</h1>
        <hr className="underline-tittle" />
      </section>

      {/**HERE IS THE MAIN-CONTAINER */}
      <main className="main-container">
        <motion.section
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="left"
        >
          <p>MONDAY 22 </p>
          <h1>
            Hey Noah! You could boost your performance by up to 30% every week!
            Let’s take your eco-conscious journey to the next levels!
          </h1>
          <hr className="underline-main" />
        </motion.section>

        <article className="center">
          <section className="center-content">
            <div className="my-fitness">
              <button>
                <CircleArrowLeft />
              </button>
              <span>MY FITNESS</span>
            </div>
            <div className="health">
              <p>HEALTH</p>
            </div>

            <div className="health-content">
              <span className="porcent">
                87<span className="porcentN">%</span>
              </span>
              <span className="health-icons">
                <Dumbbell size={19} /> <Activity size={19} color={"black"} />
              </span>
            </div>
            <div className="dates">
              <div>
                <a href="">DAILY</a>
              </div>
              <div>
                <a href="">WEAKLY</a>
              </div>
              <div>
                {" "}
                <a href="">MONTHLY</a>
              </div>
            </div>
            <div className="image">
              <img src={WomanImage} alt="" />
            </div>
          </section>
        </article>

        <motion.section
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="right"
        >
          <section className="right-content">
            <span>
              <CircleCheck />
            </span>
            <span>
              Discover how to boost your weekly performance while making
              eco-friendly choices!
            </span>
          </section>
          <section className="right-content">
            <span>
              <CircleCheck />
            </span>
            <span>
              Unlock your potential with simple steps toward sustainability and
              higher productivity!
            </span>
          </section>
        </motion.section>
      </main>
    </section>
  );
};

export default Index;
