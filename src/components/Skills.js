const Skills = () => {
  return (
    <>
      <div className="col-md-6 col-12 mt-2 py-2 ">
        <h4>Web Development Skills</h4>
        <br></br>
        <div className="progress mb-3">
          <div className="progress-bar" style={{ width: "75%" }}>
            <div className="progress-text">
              <span>HTML</span>
              <span className="d-none">75%</span>
            </div>
          </div>
        </div>
        <div className="progress my-3">
          <div className="progress-bar" style={{ width: "60%" }}>
            <div className="progress-text">
              <span>CSS / Bootstrap</span>
              <span className="d-none">60%</span>
            </div>
          </div>
        </div>
        <div className="progress my-3">
          <div className="progress-bar" style={{ width: "40%" }}>
            <div className="progress-text">
              <span>JavaScript</span>
              <span className="d-none">40%</span>
            </div>
          </div>
        </div>
        <div className="progress my-3">
          <div className="progress-bar" style={{ width: "50%" }}>
            <div className="progress-text">
              <span>React</span>
              <span className="d-none">50%</span>
            </div>
          </div>
        </div>
        <div className="progress my-3">
          <div className="progress-bar" style={{ width: "40%" }}>
            <div className="progress-text">
              <span>OpenCart</span>
              <span className="d-none">40%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-12 mt-2 py-2">
        <h4>Programming Languages</h4>
        <br></br>
        <div className="progress mb-3">
          <div className="progress-bar" style={{ width: "30%" }}>
            <div className="progress-text">
              <span>Python</span>
              <span class="d-none">30%</span>
            </div>
          </div>
        </div>
        <div className="progress my-3">
          <div className="progress-bar" style={{ width: "20%" }}>
            <div className="progress-text">
              <span>C#</span>
              <span class="d-none">20%</span>
            </div>
          </div>
        </div>
        <div className="progress mt-3">
          <div className="progress-bar" style={{ width: "20%" }}>
            <div className="progress-text">
              <span>C++</span>
              <span class="d-none">20%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
