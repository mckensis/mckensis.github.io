import GetProjects from "../functions/GetProjects";

const Projects = () => {
  const projects = GetProjects();

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p className="subtitle">Below are a select few of my projects to showcase the skills I possess.</p>
      <article>

      {projects.map(project => (
        <Project key={project.alias} project={project} />
        ))}
        </article>
    </section>
  )
}

const Project = ({ project }) => {
  return (
    <article className="individual-project background-style">
      <h3>{project.title}</h3>
      <ProjectTags tags={project.tags} />
      <ProjectImage filename={project.alias} />
      <ProjectLinks project={project} />
      <ProjectDevelopment development={project.development} />
    </article>
  )
}

const ProjectImage = ({ filename }) => {
  const images = require.context("../assets/images", true);
  if (!images(`./${filename}.png`)) return;
  return (
    <img src={images(`./${filename}.png`) || null} className="project" alt="" />
  )
}

const ProjectDevelopment = ({ development }) => {
  return (
    <section className="development">
      <h4>Development Process</h4>
      <p>{development}</p>
    </section>
  )
}

const ProjectTags = ({ tags }) => {
  return (
   <ul className="tags">
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
   </ul>
  )
}

const ProjectLinks = ({ project }) => {
  return (
    <ul className="project-links">
      <li>
        <a
          href={project.live.includes(".fly.dev") ? `https://${project.live}` : `https://mckensis.github.io/${project.live}`}
          className="big-link"
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
      </li>
      <li>
        <a 
          href={`https://www.github.com/mckensis/${project.code}`}
          className="big-link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  )
}

export default Projects;