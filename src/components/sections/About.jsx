import NeonCard from "../cards/NeonCard";

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>

        <NeonCard>
          <p>
           I am Chandan, a Computer Science Engineering student at Meenakshi Sundararajan Engineering College, Kodambakkam. I completed my schooling at Kendriya Vidyalaya, Island Grounds, Chennai, where I pursued Biology in my higher secondary education before transitioning into the engineering stream. This shift strengthened my adaptability and problem-solving mindset. I am a flexible and responsible individual who approaches assigned tasks with full commitment and focus until completion. I am highly eager to learn new technologies, continuously improve my skills, and stay updated with evolving industry trends. With an optimistic attitude and a strong willingness to grow, I strive to deliver reliable and effective solutions in every project I undertake
          </p>
        </NeonCard>
      </div>
    </section>
  );
};

export default About;
