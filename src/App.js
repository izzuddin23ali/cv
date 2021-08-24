import './App.css';
import {useState} from "react"
import Button from "./components/Button";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Hero from "./components/Hero";
import {eduData} from "./Edu";
import Data from "./Data";
import EduTemp from "./components/EduTemp";

function App() {

  const [schools, setSchools] = useState([]);

  const [loading, setLoading] = useState(true);

  const [edu, setEducation] = useState(false);

  const [exp, setExperience] = useState(false);

  const [pro, setProject] = useState(false);

  const [noC, setCat] = useState(true);

  const education = () => {
    setSchools(eduData.data);
    setEducation(true);
    setExperience(false);
    setProject(false);
    setCat(false);
    console.log(edu);
  }

  const experience = () => {
    setExperience(true);
    setEducation(false);
    setProject(false);
    setCat(false);
    console.log(exp);
  }

  const project = () => {
    setProject(true);
    setExperience(false);
    setEducation(false);
    setCat(false);
    console.log(pro);
  }

  const nocat = () => {
    setProject(false);
    setExperience(false);
    setEducation(false);
    setCat(true);
  }

  return (

    <div className="container">

      <Hero nocat = {nocat} />

      <Button education = {education} experience = {experience} project = {project}/>

      <div className="row">

        <div className="col-12">

          {noC && <Bio />}

          {edu && <Education eduData = {eduData} />}


          {exp && <Experience />}

          {pro && <Project />}

        </div>

      </div>

    </div>
  
  );

}

export default App;
