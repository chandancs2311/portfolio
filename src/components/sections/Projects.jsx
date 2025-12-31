import projects from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2>Projects</h2>

        <div className="grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
