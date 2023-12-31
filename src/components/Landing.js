import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Header />
      <section className="landing--render">Landing + hero</section>
      <Footer />
    </div>
  );
};

export default Landing;
