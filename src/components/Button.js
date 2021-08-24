const Button = ({ education, experience, project }) => {

    return(

        <div className="row justify-content-around" id="nav">

            <button onClick={education} className={"col-3 col-md-3 " + (education ? "" : "active")}>Education</button>

            <button onClick={experience} className={"col-3 col-md-3 " + (experience ? "" : "active")}>Experience</button>

            <button onClick={project} className={"col-3 col-md-3 " + (project ? "" : "active")}>Projects</button>

        </div>

    )
}

export default Button;