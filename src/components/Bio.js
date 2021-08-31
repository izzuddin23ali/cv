import Skills from "./Skills";
import Biodata from "./Biodata";
import {useState} from "react";

const Bio = () => {

    const [biodata, setBio] = useState(true);

    const [skills, setSkills] = useState(false);

    const bioActive = () => {
        setBio(true);
        setSkills(false);
    }

    const skillsActive = () => {
        setSkills(true);
        setBio(false);
    }

    return(

        <>
            <div className="row mt-2 justify-content-between mb-2 md-md-5">

                <div className="col-md-4" id="portrait">

                    <img className="mx-auto" src="images/yak.png" alt="yak" />

                </div>

                <div className="col-md-8 d-flex align-items-center">

                    <article>

                        <h3>About myself</h3>

                        <p>Hello and welcome to my website. If you are looking at this website on your computer then you might seeit as scuffed af because I only develop it for mobile view only asof now. I am still trying to figure out react framework and subsequently no time to figure out the responsiveness of the website.</p>

                        <p>This website is me practicing my react skills and try to experiment and get out of my comfort zone in the designing aspect. Feel free to browse through my academic history, work experience and projects that I hava made.</p>

                    </article>

                </div>

            </div>

            <div className = "row mx-1 d-md-none">

                <div className = "col-12" id="bioCard">

                    <div className = "row text-center align-items-center" id = "bioCardHeader">

                        <div className = {"col-6 pb-1 pt-2 " + (biodata ? "active" : "")} onClick = {bioActive}>

                            <h5>Info</h5>

                        </div>

                        <div className = {"col-6 pb-1 pt-2 " + (skills ? "active" : "")} onClick = {skillsActive}>

                            <h5>Skills</h5>

                        </div>

                    </div>

                    <div className = "row">

                        {biodata && <Biodata />}

                        {skills && <Skills />}

                    </div>

                </div>

            </div>

            <div className = "row my-5 d-none d-md-flex">

                <Biodata />

                <Skills />

            </div>

        </>

    )
}

export default Bio;