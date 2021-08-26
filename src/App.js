import './App.css';
import {useState} from "react"
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import {allData} from "./allData";
import Navigation from "./components/Navigation";

function App() {

  const [edu, setEducation] = useState(false);

  const [exp, setExperience] = useState(false);

  const [pro, setProject] = useState(false);

  const [noC, setCat] = useState(true);

  const eduToggle = () => {
    setEducation(true);
    setExperience(false);
    setProject(false);
    setCat(false);
    console.log(edu);
  }

  const expToggle = () => {
    setExperience(true);
    setEducation(false);
    setProject(false);
    setCat(false);
    console.log(exp);
  }

  const projectToggle = () => {
    setProject(true);
    setExperience(false);
    setEducation(false);
    setCat(false);
    console.log(pro);
  }

  const bioToggle = () => {
    setProject(false);
    setExperience(false);
    setEducation(false);
    setCat(true);
  }

  const [viewMore, setView] = useState(false);

  const viewToggle = () => {
    setView(true);
  }

  return (

    <div className="container-fluid">

      <Navigation bioToggle = {bioToggle} eduToggle = {eduToggle} expToggle = {expToggle} projectToggle = {projectToggle} />

      <div className="row" id="content">

        <div className="col-12 col-md-8 mx-auto">

          {noC && <Bio />}

          {edu && <Education data = {allData} />}

          {exp && <Experience data = {allData}/>}

          {pro && <Project data = {allData}/>}

        </div>

      </div>

    </div>
  
  );

}

export default App;
