import "../styles/Hero.scss";
import BiteMeVideo from "../imagesVideos/BiteMeVideo.mp4";
const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero--video"
        src={BiteMeVideo}
        alt="BiteMeHero"
        autoPlay
        muted
        loop></video>
    </section>
  );
};

export default Hero;
