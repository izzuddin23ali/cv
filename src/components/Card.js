const Card = ( data ) => {
    console.log(data.data.id);
    return(
        <>

            <div className="card col-12" key = {(data.id).toString()}>

                <div className="row">

                    <div className="thumbnail col-12" style={{ backgroundImage: "url(" + data.image_url + ")"}}>

                    </div>

                    <div className="title col-10 offset-1 text-center">

                        <h5>{data.name}</h5>

                        <h6>{data.class}</h6>

                        <h6>{data.position}</h6>

                    </div>

                    <div className="description col-10 offset-1 text-jusitfy">

                        <p>{data.info}</p>

                    </div>

                </div>



            </div>

        </>
    )
}

export default Card;