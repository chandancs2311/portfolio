import chandu from "../../assets/images/chandu.jpg";
const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container hero-container">
        
        {/* Left content */}
        <div className="hero-text">
          <h1>Hi, I'm Chandan Cherukuri</h1>
          <p> System.out.println("Full Stack Developer")  </p>
        </div>

        {/* Right image */}
        <div className="hero-image-wrapper">
          <img src={chandu} alt="Chandan" className="hero-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
