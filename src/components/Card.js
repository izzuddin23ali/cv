const Card = ( {data} ) => {
    return(
        <>

            <div className="card col-12" key = {(data.id).toString()}>

                <div className="row">

                    <div className="thumbnail col-10 mx-auto" style={{ backgroundImage: "url(" + data.image_url + ")"}}>

                    </div>

                    <div className="title col-11 mx-auto text-center">

                        <h5>{data.name}</h5>

                        <h6>{data.class}</h6>

                        <h6>{data.position}</h6>

                        <h6>{data.year}</h6>

                    </div>

                    <div className="description col-11 mx-auto text-jusitfy">

                        <p>{data.info}</p>

                    </div>

                </div>



            </div>

        </>
    )
}

export default Card;