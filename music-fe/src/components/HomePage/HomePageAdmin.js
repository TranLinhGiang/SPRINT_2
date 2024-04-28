import { useEffect, useState } from "react";
import "../../Css/HomePageAdmin.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import * as method from "../../Service/method";
import DetailLoginPage from "../Body/DetailLoginPage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SidebarAdmin from './../Sidebar/SidebarAdmin';


function HomePageAdmin() {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null); // State để lưu id của bài hát được chọn
  const [defaultSongId, setDefaultSongId] = useState(null); // State để lưu id của bài hát mặc định

  useEffect(() => {
    document.title = "Gpotify-Web Player: Music for averyone";
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

      <div className="body">
        <div >
          <HeaderAdmin />
        </div>
        <div className="display-body-admin">
          {/* Sidebar Start */}
          <div  className="col-md-1 col-lg-1">
            <SidebarAdmin/>
          </div>
   
          {/* Body Start */}
          <div className=" display-body-admin flex-wrap">
            {/* Danh sách ca sĩ Start */}
          <div className="col-md-4 col-lg-4">
          <div style={{background:'none', margin: '4px',"border-radius": '4px'}}>
              <h5 style={{margin: '4px', color: 'white' }}>Danh sách nghệ sĩ ___</h5>
              <ol 
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "470px" }} // Thêm kiểu overflow cho cuộn chuột
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
                            <span style={{color: 'white'}}>
                            {index + 1}
                            </span>
                           
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
                            <p style={{color: 'white'}}>{artist}</p>
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
              <div className="col-md-4 col-lg-4">
              <div  style={{background:'none', margin: '4px',"border-radius": '4px'}}>
              <h5 style={{margin: '4px', color: 'white'}}>Danh sách bài hát ___</h5>
              <ol
                className="ol-scroll"
                style={{ overflowY: "auto", maxHeight: "465px" }}
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
              </div>
          {/* Danh sách bài hát End */}

              {/* Footer Start */}
              <div  className="col-md-4 col-lg-4">
              <div  style={{background:'none', margin: '4px',"border-radius": '4px'}}>
                <br/>
                <DetailLoginPage
                  selectedSongId={selectedSongId}
                  songs={songs}
                  playSelectedSong={playSelectedSong}
                />
              </div>
              </div>
              {/* Footer End */}

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
              height:"40px",
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
export default HomePageAdmin;
