import './App.css';
import {useState} from "react"
import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Hero from "./components/Hero";
import {eduData} from "./Edu";

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

    <div className="container">

      <div className="row" id="header">

        <div className="col-12">

          <Hero bioToggle = {bioToggle} />

          <Nav eduToggle = {eduToggle} expToggle = {expToggle} projectToggle = {projectToggle} edu={edu} exp = {exp} pro = {pro}/>

        </div>

      </div>

      <div className="row" id="content">

        <div className="col-12">

          {noC && <Bio />}

          {edu && <Education eduData = {eduData} />}

          {exp && <Experience data = {eduData}/>}

          {pro && <Project />}

        </div>

      </div>

    </div>
  
  );

}

export default App;
