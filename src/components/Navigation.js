const Navigation = (props) => {
    return(

        <div className="row" id="header">

            <div className="col-12 col-md-8 mx-auto">

                <div className="row">

                    <div className="col-12 col-md-4" id="hero" onClick={props.bioToggle}>

                        <h2>Izzuddin Ali</h2>

                    </div>

                    <div className="col-12 offset-md-2 col-md-6" id="nav">

                        <div className="row d-flex align-items-center justify-content-around d-md-none">

                            <button onClick={props.eduToggle} className={"col-3 col-md-3 " + (props.edu ? "active" : "")}>Education</button>

                            <button onClick={props.expToggle} className={"col-3 col-md-3 " + (props.exp ? "active" : "")}>Experience</button>

                            <button onClick={props.projectToggle} className={"col-3 col-md-3 " + (props.pro ? "active" : "")}>Projects</button>

                        </div>

                        <div className="row d-none d-md-flex align-items-center" id="bigNav">

                            <div className = "col-md-3 clickable d-flex align-items-center" onClick = {props.eduToggle}>

                                <p>Education</p>

                            </div>

                            <div className = "col-md-3 clickable" onClick = {props.expToggle}>

                                <p>Experience</p>

                            </div>

                            <div className = "col-md-3 clickable" onClick = {props.projectToggle}>

                                <p>Projects</p>

                            </div>

                            <div className = "col-md-3 clickable" onClick = {props.contactToggle}>

                                <p>Contacts</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Navigation;