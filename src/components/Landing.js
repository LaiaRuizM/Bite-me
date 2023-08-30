import Hero from "./Hero";
import Header from "./Header";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Header />
      <section className="landing--render">Landing + hero</section>
    </div>
  );
};
export default Landing;
