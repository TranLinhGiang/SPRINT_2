import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import "../../Css/SidebarHomePage.css";

function Sidebar({ language, changeLanguage }) {
  return (
    <>
      {/* Sidebar-1 Start */}
      <div className="backgound-div">
        <button className="btn-homePage">
          <img
            src="/img/Header/logo.png"
            style={{ height: "23px" }}
            alt="Spotify logo"
          ></img>{" "}
          Spotify
        </button>
        <button className="btn-homePage">
          <HomeIcon /> {language === "en" ? "Home" : "Trang chủ"}
        </button>
        <button className="btn-homePage">
          <SearchIcon /> {language === "en" ? "Search" : "Tìm kiếm"}
        </button>
      </div>
      <br />
      {/* Sidebar-1 End */}

      {/* Sidebar-2 Start */}
      <div className="backgound-div">
        <button className="btn-homePage">
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
        <div style={{ display: "flex","flex-wrap": 'wrap' }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Legal" : "Pháp lý"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en"
              ? "Privacy Center"
              : "Trung tâm an toàn và quyền riêng tư"}
          </p>
        </div>
        <div style={{ display: "flex","flex-wrap": 'wrap' }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Privacy policy" : "Chính sách quyền riêng tư"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Cookie" : "Cookie"}
          </p>
        </div>
        <div style={{ display: "flex","flex-wrap": 'wrap' }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en"
              ? "Introducing advertising"
              : "Giới thiệu quảng cáo"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Accessibility support" : "Hỗ trợ tiếp cận"}
          </p>
        </div>
        <div style={{ display: "flex","flex-wrap": 'wrap' }}>
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
        <LanguageIcon className="icon-language"/>
        <select
          className="select-language"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option className="option-select" value="vn">Việt Nam</option>
          <option className="option-select" value="en">English</option>
          {/* Add more languages if needed */}
        </select>
      </div>
    </>
  );
}

export default Sidebar;