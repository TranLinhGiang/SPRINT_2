import { useEffect, useState } from "react";
import "../../Css/SearchSpotifyUser.css";
import SidebarUser from "../Sidebar/SidebarUser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import * as method from "../../Service/method";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HomeIcon from "@mui/icons-material/Home";
import { Audio } from "react-loader-spinner";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Footer from "../Footers/Footer";
import DetailLoginPage from "../Body/DetailLoginPage";
function SearchSpotifyUserLogin({ language }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // thay đổi biểu tượng icon play
  const [showAudio, setShowAudio] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        if (!selectedSongId && result.content.length > 0) {
          setDefaultSongId(result.content[0].id); // Sử dụng result.content.length thay vì result.length
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedSongId]); // Thêm selectedSongId vào dependency array

  useEffect(() => {
    // Nếu không có bài hát được chọn và có defaultSongId
    if (!selectedSongId && defaultSongId) {
      setSelectedSongId(defaultSongId);
    }
  }, [defaultSongId, selectedSongId]); // Thêm defaultSongId vào dependency array

  const playSelectedSong = (id) => {
    setSelectedSongId(id); // Truyền id của bài hát được chọn
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs?.find((song) => song.id === id).fileName; // Sử dụng id để lấy đường dẫn của bài hát
    audioPlayer.play();
    setIsPlaying(true);
  };
  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.addEventListener("ended", () => {
      setIsPlaying(false); // Set isPlaying to false when the audio ends
    });
    return () => {
      audioPlayer.removeEventListener("ended", () => {});
    };
  }, []);
  return (
    <>
      <div className="display-search-homepage">
        {/* Sidebar Start */}
        {/* <div className="col-md-1 col-lg-1">
          <SidebarUser />
        </div> */}
        {/* Sidebar End */}

        <div className="col-md-8 col-lg-8 display-flex">
          {/* Phần Header Start */}
          <div className="div-search-user-login display-search-homepage">
            <div className="col-md-1 col-lg-1">
              <Link to={"/loginPage"}>
                <button className="btn-sidebar-user">
                  <HomeIcon
                    style={{ color: "white", width: "50px", height: "35px" }}
                  />
                </button>
              </Link>
            </div>
            <div className="col-md-10 col-lg-10">
              <div>
                <input placeholder="Tìm kiếm" className="input-search"></input>
                <button className="btn-search">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="col-md-1 col-lg-1">
              <div className="ms-auto">
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>
                    <FaRegUserCircle className="icon-user" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <button className="btn-login-logout" onClick={handleShow}>
                        {language === "en" ? "Logout" : "Đăng xuất"}
                      </button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          {/* Phần Header End */}
          {/* Danh sách Start */}
          <div className="div-list-search display-search-homepage ">
            <div className="col-md-1 col-lg-1"></div>

            <div className="col-md-5 col-lg-5">
              {/* Danh sách nghệ sĩ Start */}
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  "border-radius": "4px",
                }}
              >
                <h5 style={{ margin: "4px", color: "white" }}>
                  Danh sách nghệ sĩ ___
                </h5>

                <ol
                  className="ol-scroll"
                  style={{
                    overflowY: "auto",
                    maxHeight: "467px",
                    color: "white",
                  }} // Thêm kiểu overflow cho cuộn chuột
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
              {/* Danh sách nghệ sĩ End */}
            </div>

            <div className="col-md-6 col-lg-6">
              {/* Danh sách bài hát Start */}
              <br />
              <div
                style={{
                  background: "none",
                  margin: "4px",
                  "border-radius": "4px",
                }}
              >
                <h5 style={{ margin: "4px", color: "white" }}>
                  Danh sách bài hát ___
                </h5>
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

              {/* Danh sách bài hát End */}
            </div>
          </div>
          {/* Danh sách End */}
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="search-detail">
            <DetailLoginPage
              selectedSongId={
                selectedSongId || (songs.length > 0 && songs[0].id)
              }
              songs={songs}
              playSelectedSong={playSelectedSong}
            />
          </div>

          <div className={"information"}>
            <p className="p-information">
              Thông tin ca sĩThông tin ca sĩThông tin ca sĩThông tin ca sĩThông
              tin ca sĩThông tin ca sĩThông tin ca sĩThông tin ca sĩThông tin ca
              sĩThông tin ca sĩThông tin ca sĩThông tin ca sĩThông tin ca
              sĩThông tin ca sĩ
            </p>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              {language === "en" ? "Logout" : "Đăg xuất"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal-body">
            <h5>{language === "en" ? "Close" : "Bạn muốn đăng xuất "}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "#454040", color: "black" }}
              onClick={handleClose}
            >
              {language === "en" ? "Close" : "Thoát"}
            </Button>
            <Link to={"/"}>
              <Button style={{ background: "#454040", color: "black" }}>
                {language === "en" ? "Logout" : "Đăng xuất"}
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
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
    </>
  );
}
export default SearchSpotifyUserLogin;
