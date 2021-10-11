import Skills from "./Skills";
import Biodata from "./Biodata";
import { useState } from "react";

const Bio = () => {
  const [biodata, setBio] = useState(true);

  const [skills, setSkills] = useState(false);

  const bioActive = () => {
    setBio(true);
    setSkills(false);
  };

  const skillsActive = () => {
    setSkills(true);
    setBio(false);
  };

  return (
    <>
      <h2>About myself</h2>
      <div className="row justify-content-between">
        <div className="col-md-12 d-flex align-items-center">
          <article>
            <p>
              Hello and welcome to my website. This website is still quite
              barebone as I am still looking for stuff to add!
            </p>

            <p>
              This website is me practicing my react skills and learning how to
              use react-router-dom, and also subsequently try to experiment and
              get out of my comfort zone in the designing aspect.
            </p>

            <p>
              Feel free to browse through my academic history, work experience
              and projects that I have made and do download my CV by clicking on
              the 'Download CV' button on the left-size panel if you're
              interested.
            </p>
          </article>
        </div>
      </div>

      <div className="row">
        <Skills />
      </div>
    </>
  );
};

export default Bio;
