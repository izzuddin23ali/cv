import Card from "./Card";

const Training = ({ data }) => {
  return (
    <>
      <h2 className="section-header">
        <i class="fas fa-tools"></i>Training
      </h2>
      {data.data
        .filter((data) => data.category === "training")
        .map((school) => (
          <Card key={school.id} data={school} />
        ))}
    </>
  );
};

export default Training;
