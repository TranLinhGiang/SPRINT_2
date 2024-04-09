import "../../Css/Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import {Dropdown,DropdownToggle, DropdownMenu,DropdownItem,} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  return (

     <nav className="navbar navbar-expand-lg background-header navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn bdr-rds fl-wr" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0">
            <i className="fa fa-cut me-3"></i>
            <img className="size-logo-header" src="img/Header/logo.png" alt="Logo"></img>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        ></button>
        <div className="ms-auto">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} >
            <DropdownToggle caret>
              <FaRegUserCircle className="icon-user"/>
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem >
                <button className="btn-login-logout">Đăng nhập</button>
              </DropdownItem>
              <DropdownItem>
                <button className="btn-login-logout">Đăng ký</button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>

  );
}
export default Header;
