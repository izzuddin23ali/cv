import Card from "./Card";

const Featured = ({ data }) => {
  return (
    <>
      <h2 class="section-header">
        <i class="far fa-folder"></i>Featured Projects
      </h2>
      {data.data
        .filter((data) => data.category === "featured")
        .map((project) => (
          <Card key={project.id} data={project} />
        ))}
    </>
  );
};

export default Featured;
