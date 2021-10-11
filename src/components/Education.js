import Card from "./Card";

const Education = ({ data }) => {
  return (
    <>
      <h2>Education</h2>
      {data.data
        .filter((data) => data.category === "education")
        .map((school) => (
          <Card key={school.id} data={school} />
        ))}
    </>
  );
};

export default Education;
