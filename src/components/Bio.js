import Skills from "./Skills";

const Bio = () => {
  return (
    <>
      <div className="row px-2 justify-content-between">
        <div className="col-md-12 d-flex align-items-center mt-3">
          <article>
            <h2>About myself</h2>

            <p className="text-justify">
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
              the 'Download CV' button if you're interested.
            </p>
          </article>
        </div>
      </div>

      <div className="row mt-3 px-2 bg-tertiary">
        <Skills />
      </div>
    </>
  );
};

export default Bio;
