import React, { useState, useEffect } from "react";
import "../../Css/LoginPage.css";
import * as method from "../../Service/method";
import "../../Css/HomePage.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DetailLoginPage from "./DetailLoginPage";
import HeaderLoginPage from "../Header/HeaderLoginPage";
import SidebarUser from "../Sidebar/SidebarUser";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function BodyLoginPage({ language }) {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false); // State để kiểm tra hiển thị của <Audio>
  const [flag, setFlag] = useState(false);
  const changleFlag = () => {
    setFlag(!flag);
  };
  const navigate = useNavigate();


  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token) {
     navigate("/")
    }
  },[])

  useEffect(() => {
    document.title = "Gpotify-Web Player: Music for everyone";
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
    setIsPlaying(true);
    setAudioVisible(true); // Hiển thị <Audio> khi bắt đầu phát nhạc

    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs?.find((song) => song.id === id).fileName;
    audioPlayer.load();

    // Sử dụng sự kiện canplaythrough để đảm bảo rằng audio đã sẵn sàng để phát trước khi gọi play()
    audioPlayer.addEventListener("canplaythrough", () => {
      audioPlayer.play();
    });
  };

  const pauseSong = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause();
    setIsPlaying(false);
    setAudioVisible(false); // Ẩn <Audio> khi tạm dừng bài hát
  };

  const resumeSong = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
    setIsPlaying(true);
    setAudioVisible(true); // Hiển thị <Audio> khi tiếp tục phát bài hát
  };

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.addEventListener("ended", () => {
      setIsPlaying(false);
      setAudioVisible(false); // Ẩn <Audio> khi kết thúc phát nhạc

      if (songs.length > 0) {
        const currentIndex = songs.findIndex(
          (song) => song.id === selectedSongId
        );
        const nextIndex = (currentIndex + 1) % songs.length;
        const nextSongId = songs[nextIndex].id;
        playSelectedSong(nextSongId);
      }
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
          background: "linear-gradient(rgb(2, 1, 18), rgb(49, 52, 50))",
        }}
      >
        <div
          style={{ background: "#1B1A1A", margin: "1px", borderRadius: "10px" }}
          className="col-md-1 col-lg-1"
        >
          <SidebarUser flag={flag} />
        </div>
        <div
          className="col-md-11 col-lg-11 container"
          style={{ height: "100vh" }}
        >
          <div>
            <HeaderLoginPage />
          </div>
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="col-md-4 col-lg-4" style={{ color: "white" }}>
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  borderRadius: "4px",
                }}
              >
                <h5 style={{ margin: "4px" }}>Danh sách nghệ sĩ ___</h5>
                <ol
                  className="ol-scroll"
                  style={{ overflowY: "auto", maxHeight: "467px" }}
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
                              <p className="artist-name">{artist}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </ol>
              </div>
            </div>
            <div className="col-md-4 col-lg-4" style={{ color: "white" }}>
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  borderRadius: "4px",
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
                            audioVisible ? (
                              <Audio
                                height="30"
                                width="30"
                                color="green"
                                ariaLabel="audio-loading"
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                }}
                              />
                            ) : (
                              <PlayArrowIcon className="play-and-detail" />
                            )
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
                            <div
                              className="artist-name"
                              style={{
                                color:
                                  selectedSongId === song.id
                                    ? "green"
                                    : "white",
                              }}
                            >
                              {song.title}
                            </div>
                            <div className="artist-name">{song.artist}</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </ol>
              </div>
            </div>
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
                  changleFlag={changleFlag}
                  selectedSongId={
                    selectedSongId || (songs.length > 0 && songs[0].id)
                  }
                  songs={songs}
                  playSelectedSong={playSelectedSong}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
            onPause={pauseSong} // Khi tạm dừng bài hát
            onPlay={resumeSong} // Khi tiếp tục phát bài hát
          />
         
        </div>
      </div>
    </div>
  );
}
export default BodyLoginPage;
