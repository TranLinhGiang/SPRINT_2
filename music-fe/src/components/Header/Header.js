import "../../Css/Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import "../../Css/ModalLogin.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Header({ language }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = (e) => {
    console.log(e);
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
          <Modal.Title className="text-center">
            {language === "en" ? "Login" : "Đăng nhập"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>
                {language === "en" ? "User name" : "Tên đăng nhập"}
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                {language === "en" ? "Password" : "Mật khẩu"}
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <input type="checkbox"></input>
            <strong>
              {language === "en" ? "remember login" : "Ghi nhớ đăng nhập"}
            </strong>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ background: "#454040", color: "black" }}
            onClick={handleClose}
          >
            {language === "en" ? "Close" : "Thoát"}
          </Button>
          <Link to={"/LoginPage"}>
          <Button
            type="submit"
            style={{ background: "#454040", color: "black" }}
          >
            {language === "en" ? "Login" : "Đăng nhập"}
          </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Header;
