import Card from "./Card";

const Experience = ({ data }) => {
  return (
    <>
      <h2>Experience</h2>
      {data.data
        .filter((data) => data.category === "experience")
        .map((job) => (
          <Card key={job.id} data={job} />
        ))}
    </>
  );
};

export default Experience;
