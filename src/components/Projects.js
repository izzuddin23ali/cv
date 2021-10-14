import Card from "./Card";

const Projects = ({ data }) => {
  return (
    <>
      <h2 class="section-header">
        <i class="fas fa-folder"></i>Projects
      </h2>
      {data.data
        .slice(0)
        .reverse()
        .filter((data) => data.category === "projects")
        .map((project) => (
          <Card key={project.id} data={project} />
        ))}
    </>
  );
};

export default Projects;
