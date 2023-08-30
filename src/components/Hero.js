import "../styles/Hero.scss";
const Hero = () => {
  return (
    <section className="hero size-hero">
      <div className="hero--video size-hero video">
        Hero pink
        <video
          className="hero--video"
          src="../imagesVideos/BiteMeVideo.mp4"
          alt="BiteMeHero"
          autoPlay
          muted
          loop></video>
      </div>
    </section>
  );
};

export default Hero;
