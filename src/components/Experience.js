import Card from "./Card";

const Experience = ({ data }) => {
  return (
    <>
      <h2 className="section-header">
        <i class="fas fa-briefcase"></i>Experience
      </h2>
      {data.data
        .slice(0)
        .reverse()
        .filter((data) => data.category === "experience")
        .map((job) => (
          <Card key={job.id} data={job} />
        ))}
    </>
  );
};

export default Experience;
