import Card from "./Card";

const Portfolio = ({ data }) => {
  return (
    <>
      <h2>Portfolio</h2>
      {data.data
        .filter((data) => data.category === "projects")
        .map((project) => (
          <Card key={project.id} data={project} />
        ))}
    </>
  );
};

export default Portfolio;
