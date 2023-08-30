import Hero from "./Hero";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div>
      <Hero />
      <section className="landing--render">Landing + hero</section>
    </div>
  );
};
export default Landing;
