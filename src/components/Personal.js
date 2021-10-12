const Personal = () => {
  return (
    <div className="col-md-4 col-sm-12 col-12">
      <div className="row">
        <div className="col-10 mx-auto overflow-hidden" id="personal">
          <div className="row">
            <div className="col-10 mx-auto mt-4" id="portrait">
              <img className="mx-auto" src="images/yak.png" alt="yak" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2 mx-auto text-center">
              <h1>Izzuddin Ali</h1>

              <h6>
                <span className="bg-tertiary">Budding Programmer</span>
              </h6>
              <div className="row my-3">
                <div className="col-6 mx-auto d-flex justify-content-around">
                  <a href="google.com">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="google.com">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="google.com">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-2 bg-tertiary">
            <div className="col-12 mb-2 mx-auto text-center">
              <div className="row">
                <div className="col-10 mx-auto text-left">
                  <ul>
                    <li title="email">
                      <i class="fas fa-at"></i>
                      <a href="mailto:izzuddin.binali@gmail.com">
                        izzuddin.binali@gmail.com
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-birthday-cake"></i>
                      23rd June 1996
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i>
                      Kg. Lambak Kanan
                    </li>
                    <li>
                      <i class="far fa-flag"></i>
                      Bruneian
                    </li>
                  </ul>
                </div>
              </div>

              <button className="btn ">
                <a href="/izzuddinali.pdf" download id="download">
                  <i class="fas fa-download"></i>Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
