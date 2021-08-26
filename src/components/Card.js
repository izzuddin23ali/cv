const Card = ( {data} ) => {
    return(
        <>

            <div className="card col-12" key = {(data.id).toString()}>

                <div className="row">

                    <div className="thumbnail d-flex justify-content-center align-items-center col-10 col-md-3 mx-auto" style={{ backgroundImage: "url(" + data.image_url + ")"}}>

                        {!data.image_url &&  (<p>no image</p>)}

                    </div>

                    <div className="title col-11 col-md-9 mx-auto">

                        <h5>{data.name}</h5>

                        <h6>{data.class}</h6>

                        <h6>{data.position}</h6>

                        <h6>{data.year}</h6>

                        <p className = "d-inline d-md-none">{data.info}</p>

                        <p className = "d-none d-md-block">{data.more_info}</p>

                        <p className = "d-none d-md-block">{data.second_info}</p>

                        <p>

                        {data.link && (<a className="link mr-1" href={data.link}>hosted site</a>)}

                        {data.link && (<i class="fas fa-link mr-1"></i>)}

                        {data.git && (<a className="link mr-1" href={data.git}>git repo</a>)}

                        {data.git && (<i class="fab fa-github-square"></i>)}

                        </p>

                    </div>

                </div>



            </div>

        </>
    )
}

export default Card;