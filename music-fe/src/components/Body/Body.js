import { Link, useNavigate } from "react-router-dom";
import "../../Css/Body.css";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";


function Body({ language }) {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navi = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [statusLogin, setStatusLogin]= useState(false);
  const handleLogin = (e) => {
    console.log(e);
  };

  useEffect(()=>{
     const token = localStorage.getItem("token");
     if(token) {
      navi("/loginPage")
     }
  },[])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await method.getAllSong();
        if (result && Array.isArray(result)) {
          setSongs(result);
          console.log("Danh sách: ", result);
        } else {
          console.error("Result content is not an array:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  if (!songs.length) { // Kiểm tra nếu không có dữ liệu
    return <span>Loading...</span>;
  }
  const handleSubmit = async () => {
    try {
      const user = { username: username, password: password };
      const resp = await method.login(user);
      if (resp) {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("username", resp.username);
        toast.success(`Xin chào ${username}`);
        setShow(false);
        setStatusLogin(true);
        navi("/loginPage");
      } else {
        setErr("Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = ()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate("/BodyLoginPage");
    } else {
      setShow(true);
    }
  }

  return (
    <>
    <div className="color-body-homePage">
      <div className="container-fluid gallery pb-5">
        <div className="container pb-5">
          <div className="pb-5">
            <h6
              className="text-secondary sub-title fw-bold wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ position: "relative", top: "34px" }}
            >
              {language === "en" ? "Popular Artists" : "Nhạc phổ biến"}
            </h6>
          </div>
          <div className="tab-className wow fadeInUp" data-wow-delay="0.1s">
            <div className="tab-content">
              <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-2 croll-information"
                style={{overflowY: "auto", maxHeight: "400px"}}
                >
                  {songs.map((song) => (
                    <div
                      key={song.id}
                      className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                      data-wow-delay="0.1s"
                      style={{
                        height: "200px",
                        width: "226px",
                        padding: "13px",
                        margin: "3px",
                      }}
                    >
                      <div className="video h-100">
                        <img
                          src={song.image} // Kiểm tra tên trường dữ liệu này
                          className="img-fluid rounded w-100 h-100 size-img-body"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                        <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                          <span
                            className="background-gray"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <p
                              className="text-white m-0"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {song.title}
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
                          onClick={()=> handleClick()}
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

    {/* // Modal Start */}
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className="text-center" style={{color:'white'}}>
        {language === "en" ? "Login" : "Đăng nhập"}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="custom-modal-body">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>
            {language === "en" ? "User name" : "Tên đăng nhập"}
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{color:'white'}}
            spellCheck="false"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            {language === "en" ? "Password" : "Mật khẩu"}
          </Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{color:'white'}}
          />
        </Form.Group>
        <p style={{color:'red'}}>{err}</p>
        <input type="checkbox" style={{color:'white'}}></input>
        <strong style={{color:'white'}}>
          {language === "en" ? "remember login" : "Ghi nhớ đăng nhập"}
        </strong>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        style={{ background: "red", color: "white" }}
        onClick={handleClose}
      >
        {language === "en" ? "Close" : "Thoát"}
      </Button>

      <Button
        onClick={() => {
          handleSubmit();
        }}
        style={{ color: "white" }}
        className="button-login"
      >
        {language === "en" ? "Login" : "Đăng nhập"}
      </Button>
    </Modal.Footer>
  </Modal>
    {/* // Modal End */}
    </>
  );
}

export default Body;