import "../../Css/Body.css";
import Footer from "../Footers/Footer";
import Header from "../Header/Header";
function Body({ language }) {

  return (
    <div className="color-body-homePage">
       {/* <Header language={language} handleShow={handleShow} /> Truyền handleShow xuống component Header */}
      <div className="container-fluid gallery pb-5">
        <div className="container pb-5">
          <div className="pb-5">
            <h6
              className="text-secondary sub-title fw-bold wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ position: "relative", top: "34px" }}
            >
              {language === "en" ? "Popular Artists" : "Nghệ sĩ phổ biến"}
            </h6>
          </div>
          <div className="tab-className wow fadeInUp" data-wow-delay="0.1s">
            <div className="tab-content">
              <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-2">
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/son-tung.jpg"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                        <span className="background-gray">
                          {" "}
                          {/* Thêm div để tạo vùng màu xám nhẹ */}
                          <p className="text-white m-0 ">
                            Sơn Tùng MTP
                          </p>
                          <p className="m-0 text-img-small">
                            {language === "en" ? "Artist" : "Nghệ sĩ"}
                          </p>
                          </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/gdragon.webp"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <span className="background-gray">
                        <p className="text-white m-0 ">Gdragon</p>
                        <p className=" m-0 text-img-small">
                          {" "}
                          {language === "en" ? "Artist" : "Nghệ sĩ"}
                        </p>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/jack.webp"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <span className="background-gray">
                        <p className="text-white m-0 ">Jack-J97</p>
                        <p className=" m-0 text-img-small">
                          {" "}
                          {language === "en" ? "Artist" : "Nghệ sĩ"}
                        </p>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/mono.webp"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <span className="background-gray">

                        <p className="text-white m-0">Mono</p>
                        <p className=" m-0 text-img-small">
                          {" "}
                          {language === "en" ? "Artist" : "Nghệ sĩ"}
                        </p>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-2 wow fadeInUp"
                    data-wow-delay="0.5s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/soobin.webp"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <span className="background-gray">

                        <p className="text-white m-0">
                          Soobin Hoàng Sơn
                        </p>
                        <p className=" m-0 text-img-small">
                          {" "}
                          {language === "en" ? "Artist" : "Nghệ sĩ"}
                        </p>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                    data-wow-delay="0.7s"
                    style={{
                      height: "200px",
                      width: "230px",
                      padding: "13px",
                      margin: "3px",
                    }}
                  >
                    <div className="video h-100">
                      <img
                        src="img/Body/phuongly.webp"
                        className="img-fluid rounded w-100 h-100 size-img-body"
                        style={{ "object-fit": "cover" }}
                        alt=""
                      />
                      <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <span className="background-gray">

                        <p className="text-white m-0 ">Phương Ly</p>
                        <p className="m-0 text-img-small">
                          {" "}
                          {language === "en" ? "Artist" : "Nghệ sĩ"}
                        </p>
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
