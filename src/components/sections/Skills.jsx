import NeonCard from "../cards/NeonCard";

const skills = [
  "React",
  "Java",
  "Spring Boot",
  "MongoDB",
  "SQL",
  "JavaScript",
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2>Skills</h2>

        <div className="grid">
          {skills.map((skill, index) => (
            <NeonCard key={index}>
              <h4>{skill}</h4>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
