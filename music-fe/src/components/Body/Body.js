import "../../Css/Body.css";
import Footer from "../Footers/Footer";
import Header from "../Header/Header";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";

function Body({ language }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await method.getAllSong();
        setSongs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="color-body-homePage">
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
          <div
            className="tab-className wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="tab-content">
              <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-2">
                  {songs.map((song) => (
                    <div
                      key={song.id}
                      className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
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
                          src={song.image}
                          className="img-fluid rounded w-100 h-100 size-img-body"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                        <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                          <span className="background-gray" style={{ whiteSpace: 'nowrap' }}>
                            <p className="text-white m-0" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{song.title}</p>
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
                  ))}
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
