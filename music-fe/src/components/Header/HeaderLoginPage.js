import "../../Css/Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import "../../Css/ModalLogin.css";
import { toast } from "react-toastify";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
function HeaderLoginPage({ language }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Đăng xuất thành công ");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg background-header navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn bdr-rds fl-wr"
        data-wow-delay="0.1s"
      >
        <Link to={"/LoginPage"} className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0">
            <i className="fa fa-cut me-3"></i>
            <img
              className="size-logo-header"
              src="img/Header/logo.png"
              alt="Logo"
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
              <FaRegUserCircle className="icon-user" />{" "}
              <span style={{ color: "white" }}>{username}</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to={"/upgrade"}>
                 <button className="btn-login-logout">
                  {language === "en" ? "Upgrade" : "Nâng cấp"}
                </button>
                </Link>
              </DropdownItem>
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
          <Modal.Title className="text-center" style={{color:'white'}}>
            {language === "en" ? "Logout" : "Đăg xuất"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <h5 style={{color:'white'}}>
            {language === "en"
              ? "Close"
              : `Bạn muốn đăng xuất khỏi ${username}`}
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{background: "red", color: "white" }}
            onClick={handleClose}
          >
            {language === "en" ? "Close" : "Thoát"}
          </Button>

          <Button
            style={{ color: "white" }}
            onClick={() => {
              handleLogout();
            }}
            className="button-login"
          >
            {language === "en" ? "Logout" : "Đăng xuất"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default HeaderLoginPage;
