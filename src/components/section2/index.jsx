import { Activity, CircleArrowLeft, CircleCheck, Dumbbell } from "lucide-react";
import "./style.css";

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
        <section className="left">
          <p>MONDAY 22 </p>
          <h1>
            Hey Noah! You could boost your performance by up to 30% every week!
            Let’s take your eco-conscious journey to the next levels!
          </h1>
          <hr className="underline-main" />
        </section>

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

        <section className="right">
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
        </section>
      </main>
    </section>
  );
};

export default Index;
