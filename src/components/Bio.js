import Skills from "./Skills";

const Bio = () => {
  return (
    <>
      <div className="row px-2 justify-content-between">
        <div className="col-md-12 d-flex align-items-center mt-3">
          <article>
            <h2>About myself</h2>

            <p>
              A business management graduate with basic education in information
              technology, have experience in the IT department interning at
              Institut Perkhidmatan Awam and are capable of front-end website
              development. Also experienced work in labour works and driving
              from time working for Starlodge Hotel. Able to work without
              supervision after training and acclimatization. Currently working
              as Tech Developer at Joffren Omar.
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
