const Bio = () => {
    return(

        <>
            <div className="row mt-2">

                <div className="col-md-3" id="portrait">

                </div>

                <div className="col-md-9">

                    <h3>About myself</h3>

                    <p>Hello and welcome to my website. If you are looking at this website on your computer then you might seeit as scuffed af because I only develop it for mobile view only asof now. I am still trying to figure out react framework and subsequently no time to figure out the responsiveness of the website. Feel free to browse through my academic history, work experience and projects that I have made.</p>

                </div>

            </div>

            <div className="row mb-3">

                <div className="col-md-6">

                    <h5>Biodata</h5>

                    <table>

                        <tr>

                            <th>Full Name</th>

                            <td>Mohammad Izzuddin bin Haji Ali</td>

                        </tr>

                        <tr>

                            <th>Date of Birth</th>

                            <td>23rd of June 1996</td>

                        </tr>

                    </table>

                    <h5>Skills</h5>

                    <table>

                        <tr>

                            <th>Web Development</th>

                        </tr>

                        <tr>

                            <th>HTML</th>

                            <td>Intermediate</td>

                        </tr>

                        <tr>

                            <th>Bootstrap CSS</th>

                            <td>Intermediate</td>

                        </tr>

                        <tr>

                            <th>Pure JS</th>

                            <td>Something between novice and intermediate</td>

                        </tr>

                        <tr>

                            <th>React</th>

                            <td>Novice</td>

                        </tr>

                    </table>

                </div>

            </div>

        </>

    )
}

export default Bio;