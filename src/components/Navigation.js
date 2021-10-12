import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="row" id="header">
      <nav className="navbar navbar-expand-lg mx-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mx-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto justify-content-center d-flex">
            <Link to={"/"}>
              <li className="nav-item">
                <span className="nav-link">Home</span>
              </li>
            </Link>
            <Link to={"/resume"}>
              <li className="nav-item">
                <span className="nav-link">Resume</span>
              </li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="nav-item">
                <span className="nav-link">Portfolio</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
