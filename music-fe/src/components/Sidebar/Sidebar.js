import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import "../../Css/SidebarHomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import * as method from "../../Service/method";
import Form from "react-bootstrap/Form";



function Sidebar({ language, changeLanguage }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [statusLogin, setStatusLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleLogin = (e) => {
    console.log(e);
  };
  const navi= useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token) {
     navi("/loginPage")
    }
 },[])

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
    navi("/BodyLoginPage");
  } else {
    setShow(true);
  }
}
  return (
    <>
      {/* Sidebar-1 Start */}
      <div className="backgound-div">
        <button className="btn-homePage"
        
        >
          <img
            src="/img/Header/logo.png"
            style={{ height: "30px" }}
            alt="Spotify logo"
          ></img>
          Gpotify
        </button>
        <Link to={"/"}>
        <button className="btn-homePage" >
            <HomeIcon /> {language === "en" ? "Home" : "Trang chủ"}
          </button>
        </Link>
         
      
          <button className="btn-homePage" onClick={()=> handleClick()}>
            <SearchIcon /> {language === "en" ? "Search" : "Tìm kiếm"}
          </button>
       
      </div>
      <br />
      {/* Sidebar-1 End */}

      {/* Sidebar-2 Start */}
      <div className="backgound-div">
        <button className="btn-homePage" onClick={()=> handleClick()}>
          <img
            src="/img/Header/book.png"
            style={{ height: "23px", marginRight: "5px" }}
            alt="Book icon"
          />{" "}
          {language === "en" ? "Add to Library" : "Thêm thư viện"}{" "}
          <AddIcon style={{ float: "right" }} />
        </button>
      </div>
      <br />
      <br />
      <br />
      {/* Sidebar-2 End */}

      {/* Legal Information */}
      <div className="backgound-div">
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Legal" : "Pháp lý"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en"
              ? "Privacy Center"
              : "Trung tâm an toàn và quyền riêng tư"}
          </p>
        </div>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Privacy policy" : "Chính sách quyền riêng tư"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Cookie" : "Cookie"}
          </p>
        </div>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en"
              ? "Introducing advertising"
              : "Giới thiệu quảng cáo"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Accessibility support" : "Hỗ trợ tiếp cận"}
          </p>
        </div>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Cookie" : "Cookie"}
          </p>
        </div>
        {/* Add more items based on language condition */}
      </div>
      <br />
      <br />
      {/* Language selection */}
      <div>
        <LanguageIcon className="icon-language" />
        <select
          className="select-language"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option className="option-select" value="vn">
            Việt Nam
          </option>
          <option className="option-select" value="en">
            English
          </option>
          {/* Add more languages if needed */}
        </select>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center" style={{ color: "white" }}>
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
                style={{ color: "white" }}
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
                style={{ color: "white" }}
              />
            </Form.Group>
            <p style={{ color: "red" }}>{err}</p>
            <input type="checkbox" style={{ color: "white" }}></input>
            <strong style={{ color: "white" }}>
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
      </div>
      
    </>
  );
}

export default Sidebar;
