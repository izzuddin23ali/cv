import Card from "./Card";

const Websites = ({ data }) => {
  return (
    <>
      <h2 class="section-header">
        <i class="fas fa-folder"></i>Websites
      </h2>
      {data.data
        .slice(0)
        .reverse()
        .filter((data) => data.category === "websites")
        .map((project) => (
          <Card key={project.id} data={project} />
        ))}
    </>
  );
};

export default Websites;
