import Card from "./Card";

const Education = ({ data }) => {
  return (
    <>
      <h2 className="section-header">
        <i class="fas fa-university"></i>Education
      </h2>
      {data.data
        .slice(0)
        .reverse()
        .filter((data) => data.category === "education")
        .map((school) => (
          <Card key={school.id} data={school} />
        ))}
    </>
  );
};

export default Education;
