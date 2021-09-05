const Chosen = ({data, close}) => {
    return(
        <div className = "col-12 d-md-none" id = "chosen">

            <div id = "close" onClick = {close}>
                
                <p>x</p>

            </div>

            <div className = "row">

                <div className="thumbnail d-flex justify-content-center align-items-center col-10 mx-auto" style={{ backgroundImage: "url(" + data.image_url + ")"}}>

                    {!data.image_url && 
                        (data.framework ?
                            (data.react ?
                                (<i className = "fab fa-react"></i>) :
                                (data.html ? 
                                    <i className = "fab fa-html5"></i> : (data.python && <i className = "fab fa-python"></i>)
                                )
                            ) : (<p>no image</p>)
                        )
                    }

                </div>

            </div>

            <h3 className = "text-center my-1">{data.name}</h3>

            <h6 className = "my-1">{data.position}</h6>

            <h6 className = "my-1">{data.class}</h6>

            <h6 className = "text-center my-1">{data.year}</h6>

            <p>{data.more_info}</p>

            <p>{data.second_info}</p>

            <p>{data.third_info}</p>

            <div className = "row">

                <div className = "col-6">

                    <p>

                        {data.link && <span class="d-block d-md-inline">

                            {data.link && (<a className="link mr-1" href={data.link}>hosted site</a>)}

                            {data.link && (<i className="fas fa-link mr-1"></i>)}

                        </span>}

                        {data.git && <span class = "d-block d-md-inline">

                            {data.git && (<a className="link mr-1" href={data.git}>git repo</a>)}

                            {data.git && (<i className="fab fa-github-square"></i>)}

                        </span>}

                    </p>

                </div>

            </div>

            {data.exam_one && <div className = "row">

                <div className = "col-12 col-md-6 exam">

                    <table>

                        <thead>{data.exam_one}</thead>

                        <tr>

                            <th>{data.exam_one_subject_one}</th>

                            <td>{data.exam_one_subject_one_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_two}</th>

                            <td>{data.exam_one_subject_two_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_three}</th>

                            <td>{data.exam_one_subject_three_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_four}</th>

                            <td>{data.exam_one_subject_four_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_five}</th>

                            <td>{data.exam_one_subject_five_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_six}</th>

                            <td>{data.exam_one_subject_six_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_seven}</th>

                            <td>{data.exam_one_subject_seven_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_eight}</th>

                            <td>{data.exam_one_subject_eight_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_one_subject_nine}</th>

                            <td>{data.exam_one_subject_nine_grade}</td>

                        </tr>

                    </table>

                </div>

                <div className = "col-12 col-md-6 exam">

                    <table className = "alevel">

                        <thead>{data.exam_two}</thead>

                        <tr>

                            <th>{data.exam_two_subject_one}</th>

                            <td>{data.exam_two_subject_one_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_two_subject_two}</th>

                            <td>{data.exam_two_subject_two_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_two_subject_three}</th>

                            <td>{data.exam_two_subject_three_grade}</td>

                        </tr>

                        <tr>

                            <th>{data.exam_two_subject_four}</th>

                            <td>{data.exam_two_subject_four_grade}</td>

                        </tr>

                    </table>

                </div>

            </div>}

        </div>
    )
}

export default Chosen;