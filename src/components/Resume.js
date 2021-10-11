import Education from "./Education";
import Experience from "./Experience";
import Training from "./Training";

const Resume = ({ data }) => {
  return (
    <>
      <Education data={data} />
      <Training data={data} />
      <Experience data={data} />
    </>
  );
};

export default Resume;
