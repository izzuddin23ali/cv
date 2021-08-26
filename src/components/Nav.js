const Button = ( props ) => {

    return(

        <div className="row justify-content-around" id="nav">

            <button onClick={props.eduToggle} className={"col-3 col-md-3 " + (props.edu ? "" : "active")}>Education</button>

            <button onClick={props.expToggle} className={"col-3 col-md-3 " + (props.exp ? "" : "active")}>Experience</button>

            <button onClick={props.projectToggle} className={"col-3 col-md-3 " + (props.pro ? "" : "active")}>Projects</button>

        </div>

    )
}

export default Button;