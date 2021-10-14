const Card = ({ data }) => {
  return (
    <>
      <div className="card col-12" key={data.id.toString()}>
        <div className="row">
          <div
            className="thumbnail d-flex justify-content-center align-items-center col-10 col-md-3 mx-auto"
            style={{ backgroundImage: "url(" + data.image_url + ")" }}
          >
            {!data.image_url &&
              (data.framework ? (
                data.react ? (
                  <i className="fab fa-react react"></i>
                ) : data.html ? (
                  <i className="fab fa-html5 html"></i>
                ) : (
                  data.python && <i className="fab fa-python python"></i>
                )
              ) : (
                <p>no image</p>
              ))}
          </div>

          <div className="title col-11 col-md-9 mx-auto">
            <h5 className="my-1">
              <a
                href={data.link ? data.link : data.git}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.name}
              </a>
            </h5>

            <h6 className="my-1">{data.class}</h6>

            <h6 className="my-1">{data.position}</h6>

            <h6 className="my-1 year">{data.year}</h6>

            <p>{data.info}</p>

            <div className="row">
              <div className="col-6">
                <p>
                  {data.link && (
                    <span class="d-block d-md-inline">
                      {data.link && (
                        <a
                          className="link mr-1"
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          hosted site
                        </a>
                      )}

                      {data.link && <i className="fas fa-link mr-1"></i>}
                    </span>
                  )}

                  <br className="d-none d-md-block d-lg-none" />

                  {data.git && (
                    <span class="d-block d-md-inline">
                      {data.git && (
                        <a
                          className="link mr-1"
                          href={data.git}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          git repo
                        </a>
                      )}

                      {data.git && <i className="fab fa-github"></i>}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {data.framework && (
          <div className="col-6 text-right" id="framework">
            {data.html && <i title="html5" className="fab fa-html5 mx-1"></i>}

            {data.css && <i title="css5" className="fab fa-css3-alt mx-1"></i>}

            {data.bootstrap && (
              <i title="bootstrap" className="fab fa-bootstrap mx-1"></i>
            )}

            {data.react && <i title="react" className="fab fa-react mx-1"></i>}

            {data.js && (
              <i title="javascript" className="fab fa-js-square mx-1"></i>
            )}

            {data.python && (
              <i title="python" className="fab fa-python mx-1"></i>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
