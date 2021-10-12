import Education from "./Education";
import Experience from "./Experience";
import Training from "./Training";

const Resume = ({ data }) => {
  return (
    <div id="resume">
      <Education data={data} />
      <Training data={data} />
      <Experience data={data} />
    </div>
  );
};

export default Resume;
