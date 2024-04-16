import React, { useState, useEffect } from "react";
import "../../Css/LoginPage.css";
import * as method from "../../Service/method";
import "../../Css/HomePage.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WalletIcon from "@mui/icons-material/Wallet";
import GroupIcon from "@mui/icons-material/Group";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Dropdown from "react-bootstrap/Dropdown";
import DetailLoginPage from "./DetailLoginPage";
import HeaderLoginPage from "../Header/HeaderLoginPage";

function BodyLoginPage({ language }) {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null); // State để lưu id của bài hát được chọn
  const [defaultSongId, setDefaultSongId] = useState(null); // State để lưu id của bài hát mặc định

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await method.getAllSong();
        setSongs(result);

        // Nếu không có bài hát được chọn hoặc danh sách bài hát thay đổi, chọn bài hát đầu tiên làm mặc định
        if (!selectedSongId && result.length > 0) {
          setDefaultSongId(result[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedSongId]); // Thêm selectedSongId vào dependency array

  useEffect(() => {
    // Nếu không có bài hát được chọn, sử dụng bài hát mặc định
    if (!selectedSongId && defaultSongId) {
      setSelectedSongId(defaultSongId);
    }
  }, [defaultSongId]);

  const playSelectedSong = (id) => {
    setSelectedSongId(id); // Truyền id của bài hát được chọn
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs.find((song) => song.id === id).fileName; // Sử dụng id để lấy đường dẫn của bài hát
    audioPlayer.play();
  };
  return (
    <div className="body-loginPage" style={{
      background: "black",
      height: "100%",
    }}>
      {/* header Start */}
      {/* <header>
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
                          <button className="icon-header">
                            <a>
                              <NotificationsActiveIcon className="icon" />
                            </a>
                          </button>
                        </li>
                        <li>
                          <button className="icon-header">
                            <a>
                              <WalletIcon className="icon" />
                            </a>
                          </button>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <GroupIcon className="icon" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              ></Dropdown.Toggle>

                              <Dropdown.Menu>
                                <button className="button-logout-loginPage">
                                  Đăng xuất
                                </button>
                              </Dropdown.Menu>
                            </Dropdown>
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
      </header> */}
      {/* <HeaderLoginPage/> */}
      {/* header End */}

      {/* Body Start */}

      <div
        className=" slider_area"
        
      >
        <div className="single_slider slider_bg_1 overlay2">
          <div
            className="position-loginPage d-flex"
            style={{ "flex-wrap": "wrap" }}
          >
            <div className="col-md-2 col-lg-2" style={{ color: "white" }}>
              Sidebar
            </div>
            <div className="col-md-3 col-lg-3" style={{ color: "white" }}>
              <h2>Danh sách nghệ sĩ</h2>
              <ol
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "300px" }} // Thêm kiểu overflow cho cuộn chuột
              >
                {Array.from(new Set(songs.map((song) => song.artist))).map(
                  (artist, index) => {
                    // Tìm tất cả các bài hát của nghệ sĩ này
                    const artistSongs = songs.filter(
                      (song) => song.artist === artist
                    );

                    // Chỉ lấy một bài hát đại diện cho nghệ sĩ
                    const representativeSong = artistSongs[0];

                    return (
                      <div key={index} className="p-1">
                        <div style={{ display: "flex" }}>
                          <div
                            style={{
                              marginRight: "10px",
                              fontFamily: "fantasy",
                              fontSize: "22px",
                              position: "relative",
                              top: "9px",
                            }}
                          >
                            {index + 1}
                          </div>
                          <img
                            src={representativeSong.image}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                          />
                          <div>
                            <p>{artist}</p>
                            {/* {language === "en" ? "Artist" : "Nghệ sĩ"} */}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </ol>
            </div>
            <div className="col-md-3 col-lg-3" style={{ color: "white" }}>
              <h2>Danh sách bài hát</h2>
              <ol
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "300px" }}
              >
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="p-1"
                    onClick={() => playSelectedSong(song.id)} // Sửa đổi thành truyền id của bài hát được chọn
                  >
                    <button className="button-div-list-song">
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            marginRight: "10px",
                            fontFamily: "fantasy",
                            fontSize: "22px",
                            position: "relative",
                            top: "9px",
                          }}
                        >
                          {index + 1}
                        </div>
                        <PlayArrowIcon className="play-and-detail" />
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
                          <div className="artist-name">{song.title}</div>
                          <div className="artist-name">{song.artist}</div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </ol>
            </div>
            <div className="col-md-3 col-lg-3">
              <div>
                <DetailLoginPage
                  selectedSongId={selectedSongId}
                  songs={songs}
                  playSelectedSong={playSelectedSong}
                />
              </div>
            </div>
            <div className="col-md-1 col-lg-1"></div>
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
