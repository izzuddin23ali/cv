const Navigation = (props) => {
    return(

        <div className="row" id="header">

            <div className="col-12 col-md-8 mx-auto">

                <div className="row">

                    <div className="col-12 col-md-6" id="hero" onClick={props.bioToggle}>

                        <h1>Izzuddin Ali</h1>

                    </div>

                    <div className="col-12 col-md-6" id="nav">

                        <div className="row d-flex align-items-center justify-content-around">

                            <button onClick={props.eduToggle} className={"col-3 col-md-3" + (props.edu ? "active" : "")}>Education</button>

                            <button onClick={props.expToggle} className={"col-3 col-md-3 " + (props.exp ? "active" : "")}>Experience</button>

                            <button onClick={props.projectToggle} className={"col-3 col-md-3 " + (props.pro ? "active" : "")}>Projects</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Navigation;