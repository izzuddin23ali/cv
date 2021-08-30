const Biodata = () => {
    return(
        <>

            <div className="col-md-6 col-12 my-3">

                <h5>Info</h5>

                <table className = "bioTable">

                    <tr>

                        <th>Full Name</th>

                        <td>Mohammad Izzuddin bin Haji Ali</td>

                    </tr>

                    <tr>

                        <th>Date of Birth</th>

                        <td>23rd of June 1996</td>

                    </tr>

                </table>

            </div>

            <div className = "col-md-6 col-12 my-3">

                <h5>Contacts</h5>

                <table className = "bioTable">
                    
                    <tr>

                        <th>Email</th>

                        <td>izzuddin.binali@gmail.com</td>

                    </tr>

                    <tr>

                        <th>GitHub</th>

                        <td><a href="https://github.com/izzuddin23ali">izzuddin23ali</a></td>

                    </tr>

                    <tr>

                        <th>linkedIn</th>

                        <td><a href="https://www.linkedin.com/in/izzuddin-ali-575a18211/">Izzuddin Ali</a></td>

                    </tr>

                </table>

            </div>

        </>
    )
}

export default Biodata;