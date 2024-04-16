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
import { blue } from "@mui/material/colors";

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
    <div className="body-loginPage">
      <div style={{ display: "flex" }}>
        <div style={{ background: "yellow" }} className="col-md-2 col-lg-2">
          Sidebar
        </div>
        <div className="col-md-10 col-lg-10" style={{"background": 'black' }}>
          <div >
            {/* Header Start */}
            <HeaderLoginPage/>
            {/* Header End */}
          </div>
          <div
            style={{ display: "flex", "flex-wrap": "wrap","background": 'black' }}
            className="container "
          >
            
            {/* Danh sách ca sĩ Start */}
            <div className="col-md-4 col-lg-4" style={{ color: "white", "background": 'black' }}>
              <br/>
              <br/>
              <h5>Danh sách nghệ sĩ</h5>
              <br/>
              <ol
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "400px" }} // Thêm kiểu overflow cho cuộn chuột
              >
                {Array.from(new Set(songs.map((song) => song.artist))).map(
                  (artist, index) => {
                    const artistSongs = songs.filter(
                      (song) => song.artist === artist
                    );

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
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </ol>
            </div>
            {/* Danh sách ca sĩ End */}
            {/* Danh sách bài hát Start */}
            <div className="col-md-4 col-lg-4" style={{ color: "white","background": 'black' }}>
            <br/>
              <br/>
              <h5>Danh sách bài hát ___</h5>
              <br/>
              <ol
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "400px" }}
              >
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="p-1"
                    onClick={() => playSelectedSong(song.id)}
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
            {/* Danh sách bài hát End */}
            {/* Chi tiết bài hát Start */}
            <div className="col-md-4 col-lg-4" style={{ "background": 'black'}}>
              <div>
                <br/>
                <br/>
                
                <DetailLoginPage
                  selectedSongId={selectedSongId}
                  songs={songs}
                  playSelectedSong={playSelectedSong}
                />
              </div>
            </div>
            {/* Chi tiết bài hát End */}
          </div>
        </div>
      </div>
      {/* footer Start */}
      <div>
        <div className="footer-loginPage">
          <audio
            preload="auto"
            controls
            style={{ width: "100%", background: "white" }}
            id="audioPlayer"
          />
        </div>
      </div>
      {/* footer End */}
    </div>
  );
}
export default BodyLoginPage;
