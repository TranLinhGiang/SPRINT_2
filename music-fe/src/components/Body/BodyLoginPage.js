import React, { useState, useEffect } from "react";
import "../../Css/LoginPage.css";
import * as method from "../../Service/method";
import "../../Css/HomePage.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DetailLoginPage from "./DetailLoginPage";
import HeaderLoginPage from "../Header/HeaderLoginPage";
import SidebarUser from "../Sidebar/SidebarUser";
import { Audio } from "react-loader-spinner";

function BodyLoginPage({ language }) {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null); // State để lưu id của bài hát được chọn
  const [defaultSongId, setDefaultSongId] = useState(null); // State để lưu id của bài hát mặc định
  const [isPlaying, setIsPlaying] = useState(false); // thay đổi biểu tượng icon play
  const [showAudio, setShowAudio] = useState(false);
  useEffect(() => {
    document.title = "Gpotify-Web Player: Music for averyone";
    const fetchData = async () => {
      try {
        const result = await method.getAllSong();
        setSongs(result);

        if (!selectedSongId && result.length > 0) {
          setSelectedSongId(result[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedSongId]);

  const playSelectedSong = (id) => {
    setSelectedSongId(id);
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs?.find((song) => song.id === id).fileName;
    audioPlayer.play();
    setIsPlaying(true); // Set isPlaying to true when a song is played
  };
  // Xử lý khi nhạc kết thúc
useEffect(() => {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.addEventListener("ended", () => {
    setIsPlaying(false); // Set isPlaying to false when the audio ends

    // Lấy index của bài hát hiện tại trong danh sách
    const currentIndex = songs.findIndex((song) => song.id === selectedSongId);

    // Lấy index của bài hát kế tiếp
    const nextIndex = (currentIndex + 1) % songs.length;

    // Lấy id của bài hát kế tiếp
    const nextSongId = songs[nextIndex].id;

    // Phát nhạc bài kế tiếp
    playSelectedSong(nextSongId);
  });

  return () => {
    audioPlayer.removeEventListener("ended", () => {});
  };
}, [selectedSongId, songs]);
  return (
    <div className="body-loginPage">
      <div
        style={{
          display: "flex",
          "background-image": "linear-gradient(rgb(2, 1, 18), rgb(49, 52, 50))",
        }}
      >
        <div
          style={{
            background: "#1B1A1A",
            margin: "1px",
            "border-radius": "10px",
          }}
          className="col-md-1 col-lg-1"
        >
          <SidebarUser />
        </div>
        <div
          className="col-md-11 col-lg-11 container"
          style={{ height: "100vh" }}
        >
          <div>
            {/* Header Start */}
            <HeaderLoginPage />
            {/* Header End */}
          </div>
          <div
            style={{
              display: "flex",
              "flex-wrap": "wrap",
              // background: "black",
            }}
            className="container "
          >
            {/* Danh sách ca sĩ Start */}
            <div
              className="col-md-3 col-lg-3"
              style={{
                color: "white",
                // , background: "black"
              }}
            >
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  "border-radius": "4px",
                }}
              >
                <h5 style={{ margin: "4px" }}>Danh sách nghệ sĩ ___</h5>
                <ol
                  className="ol-scroll"
                  style={{ overflowY: "auto", maxHeight: "467px" }} // Thêm kiểu overflow cho cuộn chuột
                >
                  {Array.from(new Set(songs?.map((song) => song.artist))).map(
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
            </div>
            {/* Danh sách ca sĩ End */}
            {/* Danh sách bài hát Start */}
            <div
              className="col-md-5 col-lg-5"
              style={{
                color: "white",
                // , background: "black"
              }}
            >
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  "border-radius": "4px",
                }}
              >
                <h5 style={{ margin: "4px" }}>Danh sách bài hát ___</h5>
                <ol
                  className="ol-scroll"
                  style={{ overflowY: "auto", maxHeight: "465px" }}
                >
                  {songs?.map((song, index) => (
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

                          {selectedSongId === song.id && isPlaying ? (
                            <Audio
                              height="30"
                              width="30"
                              color="green"
                              ariaLabel="three-dots-loading"
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%", // Đặt ở giữa theo chiều ngang
                                transform: "translateX(-50%)", // Dịch chuyển ngược lại 50% chiều ngang để căn giữa
                              }}
                            />
                          ) : (
                            <PlayArrowIcon className="play-and-detail" />
                          )}
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
            </div>
            {/* Danh sách bài hát End */}
            {/* Chi tiết bài hát Start */}
            <div className="col-md-4 col-lg-4" style={{ background: "none" }}>
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  borderRadius: "4px",
                }}
              >
                <br />
                <DetailLoginPage
                  selectedSongId={
                    selectedSongId || (songs.length > 0 && songs[0].id)
                  }
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
            style={{
              width: "100%",
              height: "40px",
              background: "white",
              position: "relative",
              top: "5px",
            }}
            id="audioPlayer"
          />
        </div>
      </div>
      {/* footer End */}
    </div>
  );
}
export default BodyLoginPage;
