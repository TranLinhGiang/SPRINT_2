import "../../Css/HeaderAdmin.css";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import { Link } from "react-router-dom";
function HeaderAdmin({language}){
    const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
        <div className="display-header-admin">
            <div className="col-md-2 col-lg-2">
              <Link to={"/admin"}>
              <img className="logo-admin" src="img/Header/logo-admin.png" alt=""></img>
              </Link>                 
            </div>
            <div className="col-md-9 col-lg-9 title-header-admin"></div>
            <div className="col-md-1 col-lg-1">
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
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            {language === "en" ? "Logout" : "Đăg xuất"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <h5>
          {language === "en" ? "Close" : "Bạn muốn đăng xuất "}
          </h5>
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
        </>
    )
}
export default HeaderAdmin;