import Projects from "./Projects";
import Featured from "./Featured";
import Websites from "./Websites";

const Portfolio = ({ data }) => {
  return (
    <div id="projects">
      <Websites data={data} />
      <Projects data={data} />
    </div>
  );
};

export default Portfolio;
