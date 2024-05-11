import "../../Css/Favourite.css";
import SidebarUser from "../Sidebar/SidebarUser";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";
import DetailLoginPage from "./DetailLoginPage";
import "../../Css/HeaderFacourite.css";
import { FavoriteBorder } from "@mui/icons-material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function Favourite() {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false); // State để kiểm tra hiển thị của <Audio>
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token) {
     navigate("/")
    }
  },[])
  const changleFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    const getAllSong = async () => {
      try {
        let aa = [];
        let x = localStorage.getItem("favourite").split(",");
        const result = await method.getAllSong();
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < x.length; j++) {
            if (result[i].id == x[j]) {
              aa.push(result[i]);
              break;
            }
          }
        }
        console.log(aa);
        setSongs(aa);
      } catch (e) {
        console.log(e);
      }
    };
    getAllSong();
  }, []);


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

  const removeFromFavourite = async (songIdToRemove) => {
    try {
      // Lấy danh sách yêu thích từ Local Storage
      let favouriteList = localStorage.getItem("favourite").split(",");
      // Xóa id bài hát khỏi danh sách yêu thích
      favouriteList = favouriteList.filter((id) => id !== songIdToRemove);
      // Lưu lại danh sách yêu thích mới vào Local Storage
      localStorage.setItem("favourite", favouriteList.join(","));
  
      // Cập nhật state songs để render lại danh sách yêu thích trên giao diện
      const updatedSongs = songs.filter((song) => song.id !== songIdToRemove);
      setSongs(updatedSongs);
  
      // Gọi hàm changleFlag để cập nhật lại giao diện
      changleFlag();
    } catch (error) {
      console.error("Error removing from favourite:", error);
    }
  };
  


  useEffect(() => {   // tự động chuyển bài
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

  if (!songs) {
    return <pan>Loading...</pan>;
  }

  return (
    <>
      <div className="display-flex-favourite">
        <div className="col-sm-1 col-md-1 col-lg-1">
          <div className="sidebar-favourite">
          <SidebarUser />
          </div>   
        </div>
        <div
          className="col-sm-11 col-md-11 col-lg-11 display-flex-favourite"
          style={{ "flex-wrap": "wrap", height: "100vh" }}
        >
          <div className="col-sm-7 col-lg-7 container">
            <div className="favoritetitle">
              <div style={{display: 'flex'}}>
                <div className="col-sm-4 col-lg-4">
                  <br/>
                  <img className="logo-favourite" src="img/Header/logo-favourite.png"></img>
                </div>
                <div className="col-sm-8 col-lg-8">
                  <div className="container div-hihi">
                    <br/>
                    <p style={{color:'white'}}>Playlist</p>
                    <h1 style={{color:'white'}}>Danh sách yêu thích</h1>
                    <p style={{ color: 'white' }}>{songs.length} bài hát</p>

                  </div>
                </div>
              </div>
              <br/>
              <div className="ol-scroll" style={{overflowY: "auto", maxHeight: "366px"}}>
              <table>
                <thead>
                  <tr>
                    <th style={{ color: "white", width: "70px" }}>#</th>
                    <th style={{ color: "white", width: "88px" }}></th>
                    <th style={{ float: "left", color: "white" }}>Tiêu đề</th>
                    <th style={{ color: "none", width: "88px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((item, index) => (
                    <tr key={item.id}>
                      <td style={{ color: "white" }} style={{
                              marginRight: "10px",
                              fontFamily: "fantasy",
                              fontSize: "22px",
                              position: "relative",
                              top: "9px",
                              color: "white"
                            }}>{index + 1}</td>
                      <td>
                        <button
                          className="btn-titleandartist"
                          key={item.id}
                          onClick={() => playSelectedSong(item.id)}
                        >
                          {selectedSongId === item.id && isPlaying ? (
                            audioVisible ? (
                              <div className="audio-container">
                                <Audio
                                  height="30"
                                  width="30"
                                  color="green"
                                  ariaLabel="audio-loading"
                                />
                              </div>
                            ) : (
                              <PlayArrowIcon className="play-and-details" />
                            )
                          ) : (
                            <PlayArrowIcon className="play-and-details" />
                          )}
                          <img className="picture-favourite" src={item.image} />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-titleandartist"
                          key={item.id}
                          onClick={() => playSelectedSong(item.id)}
                        >
                          <div style={{ float: "left", color: "white" }}>
                            <span
                             
                              style={{
                                color:
                                  selectedSongId === item.id
                                    ? "green"
                                    : "white",
                              }}
                            >
                              {item.title}
                            </span>
                          </div>
                          <br />
                          <div style={{ float: "left", color: "white" }}>
                            <span>{item.artist}</span>
                          </div>
                        </button>
                      </td>
                      <td style={{ color: "white" }}>
                        <button className="btn-favourite" onClick={() => removeFromFavourite(item.id)}>
                          <FavoriteBorder />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
         
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <br />
            <br />
            <br />
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
          <div className="col-sm-1 col-lg-1"></div>
        </div>
      </div>
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
    </>
  );
}
export default Favourite;
