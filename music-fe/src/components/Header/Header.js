import "../../Css/Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../../Css/ModalLogin.css";
import * as method from "../../Service/method";
import { toast } from "react-toastify";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
function Header({ language }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navi = useNavigate();
  const handleLogin = (e) => {
    console.log(e);
  };

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  const handleSubmit = async () => {
    try {
      const user = { username: username, password: password };
      const resp = await method.login(user);
      if (resp) {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("username", resp.username);
        toast.success(`Xin chào ${username}`);
        setShow(false);
        navi("/loginPage");
      } else {
        setErr("Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg background-header navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn bdr-rds fl-wr"
        data-wow-delay="0.1s"
      >
        <Link to={"/"} className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0">
            <img
              className="size-logo-header"
              src="img/Header/logo.png"
              alt=""
            ></img>
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        ></button>
        <div className="ms-auto">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              <FaRegUserCircle className="icon-user" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <button className="btn-login-logout" onClick={handleShow}>
                  {language === "en" ? "Login" : "Đăng nhập"}
                </button>
              </DropdownItem>
              <DropdownItem>
                <button className="btn-login-logout">
                  {language === "en" ? "Register" : "Đăng ký"}
                </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>

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
    </>
  );
}
export default Header;
