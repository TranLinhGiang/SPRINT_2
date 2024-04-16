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
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
function HeaderLoginPage({ language }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg background-header navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn bdr-rds fl-wr"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0">
            <i className="fa fa-cut me-3"></i>
            <img
              className="size-logo-header"
              src="img/Header/logo.png"
              alt="Logo"
            ></img>
          </h1>
        </a>
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
                  {language === "en" ? "Logout" : "Đăng xuất"}
                </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            {language === "en" ? "Logout" : "Đăg xuất"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ background: "#454040", color: "black" }}
            onClick={handleClose}
          >
            {language === "en" ? "Close" : "Thoát"}
          </Button>
          <Link to={"/loginPage"}>
            <Button style={{ background: "#454040", color: "black" }}>
              {language === "en" ? "Logout" : "Đăng xuất"}
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default HeaderLoginPage;
