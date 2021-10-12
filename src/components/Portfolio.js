import Projects from "./Projects";
import Featured from "./Featured";

const Portfolio = ({ data }) => {
  return (
    <div id="projects">
      <Featured data={data} />
      <Projects data={data} />
    </div>
  );
};

export default Portfolio;
