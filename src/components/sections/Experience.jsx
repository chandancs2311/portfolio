import NeonCard from "../cards/NeonCard";

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <h2>Experience</h2>

        <div className="grid">
          <NeonCard>
            <h4>Software Intern</h4>
            <p>Worked on spring boot java & backend integration.</p>
          </NeonCard>

          <NeonCard>
            <h4>Web Developer Intern</h4>
            <p>Built responsive UI components.</p>
          </NeonCard>
        </div>
      </div>
    </section>
  );
};

export default Experience;
