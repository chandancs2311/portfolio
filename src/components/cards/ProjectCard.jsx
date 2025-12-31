const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="neon-card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="project-tech">{tech}</span>
    </div>
  );
};

export default ProjectCard;
