const Personal = () => {
  return (
    <div className="col-md-4 col-sm-12 col-12">
      <div className="row">
        <div className="col-10 mx-auto" id="personal">
          <div className="row" id="naik">
            <div className="col-10 mx-auto mt-3" id="portrait">
              <img className="mx-auto" src="images/yak.png" alt="yak" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-2 mx-auto text-center">
              <h1>Izzuddin Ali</h1>

              <h6>
                <span className="bg-tertiary">Budding Programmer</span>
              </h6>

              <div className="row mt-3">
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
                <a href="/izzuddinali.pdf" download>
                  Download CV
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
