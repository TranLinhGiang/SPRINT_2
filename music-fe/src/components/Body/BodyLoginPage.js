import React, { useState, useEffect } from "react";
import "../../Css/LoginPage.css";
import * as method from "../../Service/method";
import "../../Css/HomePage.css";

function BodyLoginPage({ language }) {
  const [songs, setSongs] = useState([]);
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

  const playSelectedSong = (index) => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs[index].fileName;
    audioPlayer.play();
  };
  return (
    <div>
      {/* header Start */}
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          style={{ width: "100px" }}
                          src="img/Header/logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav></nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="social_icon text-right">
                      <ul>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-facebook"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-twitter"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fa fa-instagram"></i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header End */}

      {/* Body Start */}

      <div
        className=" slider_area"
        style={{
          backgroundImage: `https://images7.alphacoders.com/133/1333817.jpeg`,
        }}
      >
        <div className="single_slider slider_bg_1 overlay2">
          <div className="position-loginPage d-flex">
            <div className="col-md-2 col-lg-2" style={{ color: "white" }}>
              Sidebar
            </div>
            <div className="col-md-3 col-lg-3" style={{ color: "white" }}>
              <h2>Danh sách nghệ sĩ</h2>
              <ol>
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="p-1"
                    onClick={() => playSelectedSong(index)}
                  >
                    <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px","font-family": 'fantasy',"font-size": '22px', "position": "relative","top": '9px' }}>{index + 1}</div>
                      <img
                        src={song.image}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <div>{song.artist}</div>
                        {language === "en" ? "Artist" : "Nghệ sĩ"}
                      </div>
                    </div>
                  
                  </div>
                ))}
              </ol>
            </div>
            <div className="col-md-4 col-lg-4" style={{ color: "white" }}>
              <h2>Danh sách bài hát</h2>
              <ol>
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="p-1"
                    onClick={() => playSelectedSong(index)}
                  >
                    <button className="button-div-list-song">
                    <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px","font-family": 'fantasy',"font-size": '22px', "position": "relative","top": '9px' }}>{index + 1}</div> {/* Số thứ tự */}
                      <img
                        src={song.image}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                      </div>
                    </div>
                    </button>
                    
                  
                  </div>
                ))}
              </ol>
            </div>
            <div className="col-md-3 col-lg-3">uhikijh</div>
          </div>
        </div>
      </div>

      {/* Your footer code */}
      <div className="music_area">
        <div className="container">
          <div className="audio_name audio-footer">
            <audio
              preload="auto"
              controls
              style={{ width: "100%", background: "none" }}
              id="audioPlayer"
            />
          </div>
        </div>
      </div>
    </div>
    // Footer End //
  );
}
export default BodyLoginPage;
