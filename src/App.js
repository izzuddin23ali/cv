import './App.css';
import {useState} from "react"
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import {data} from "./data";
import MoreInfo from "./components/MoreInfo";

function App() {

  const [edu, setEducation] = useState(false);

  const [exp, setExperience] = useState(false);

  const [pro, setProject] = useState(false);

  const [noC, setCat] = useState(true);

  const [cont, setContact] = useState(false);

  const [shownCard, setCard] = useState(99);

  const eduToggle = () => {
    setEducation(true);
    setExperience(false);
    setProject(false);
    setCat(false);
    setContact(false);
  }

  const expToggle = () => {
    setExperience(true);
    setEducation(false);
    setProject(false);
    setCat(false);
    setContact(false);
  }

  const projectToggle = () => {
    setProject(true);
    setExperience(false);
    setEducation(false);
    setCat(false);
    setContact(false);
  }

  const bioToggle = () => {
    setProject(false);
    setExperience(false);
    setEducation(false);
    setCat(true);
    setContact(false);
  }

  const contactToggle = () => {
    setProject(false);
    setExperience(false);
    setEducation(false);
    setCat(false);
    setContact(true);
  }

  const [viewMore, setView] = useState(false);

  const view = (id) => {
    setCard(id);
    setView(true);
    console.log(id);
    console.log(shownCard);
  }

  return(

    <div className="container-fluid">

      <Navigation bioToggle = {bioToggle} eduToggle = {eduToggle} expToggle = {expToggle} projectToggle = {projectToggle} contactToggle = {contactToggle}/>

      <div className="row" id="content">

        <div className="col-12 col-md-8 mx-auto">

          {noC && <Bio />}

          {edu && <Education data = {data} view = {view}/>}

          {exp && <Experience data = {data} view = {view}/>}

          {pro && <Project data = {data} view = {view}/>}

          {cont && <Contact />}

          {viewMore && <MoreInfo data = {data} shownCard = {shownCard}/>}

        </div>

      </div>

    </div>
  
  );

}

export default App;
