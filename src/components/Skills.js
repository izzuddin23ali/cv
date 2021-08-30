const Skills = () => {
    return(
        <>

            <div className = "col-md-6 col-12 my-2">

                <h5>Programming Skills</h5>

                <ul className = "bioList">

                    <li>

                        <label for = "html">HTML</label>

                        <progress id = "html" value = "60" max = "100"></progress>

                    </li>

                    <li>

                        <label for ="css">CSS / Bootstrap CSS</label>

                        <progress id = "css" value = "60" max = "100"></progress>

                    </li>

                    <li>

                        <label for = "javascript">JavaScript</label>

                        <progress id = "javascript" value = "40" max = "100"></progress>

                    </li>

                    <li>

                        <label for = "react">React</label>

                        <progress id = "react" value = "40" max = "100"></progress>

                    </li>

                </ul> 

            </div>

            <div className = "col-md-6 col-12 my-2">

                <h5>Applications Skills</h5>

                <ul className = "bioList">

                    <li>

                        <label for = "word">MS Word</label>

                        <progress id = "word" value = "50" max = "100"></progress>

                    </li>

                    <li>

                        <label for = "powerpoint">MS PowerPoint</label>

                        <progress id = "powerpoint" value = "40" max = "100"></progress>

                    </li>

                    <li>

                        <label for = "access">MS Access</label>

                        <progress id = "access" value = "30" max = "100"></progress>

                    </li>

                </ul>

            </div>

        </>
    )
}

export default Skills;