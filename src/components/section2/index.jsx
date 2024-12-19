import { CircleCheck } from "lucide-react";
import "./style.css";

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
            Let’s take your eco-conscious journey to the next level!
          </h1>
          <hr className="underline-main" />
        </section>

        <article className="center">teste</article>
        <section className="right">
          <span>
            <CircleCheck /> Hey Noah! You could boost your performance by up to
            30% every week! Let’s take your eco-conscious
          </span>{" "}
          <br />
          <span>
            <CircleCheck />
            Hey Noah! You could boost your performance by up to 30% every week!
            Let’s take your eco-conscious
          </span>
        </section>
      </main>
    </section>
  );
};

export default Index;
