import Bio from "./Bio";
import Navigation from "./Navigation";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div className="col-md-8 overflow-hidden" id="main">
        <Navigation />

        <div className="row mt-2" id="content">
          <div className="col-12 mx-auto">
            <Switch>
              <Route path="/" exact component={Bio} />
              <Route path="/resume">
                <Resume data={data} />
              </Route>
              <Route path="/portfolio">
                <Portfolio data={data} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
