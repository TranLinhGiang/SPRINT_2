import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "../../Css/HomePage.css";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
function Sidebar() {
  const [language, setLanguage] = useState(""); // Trạng thái cho ngôn ngữ được chọn

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage); // Cập nhật trạng thái với ngôn ngữ được chọn
  };
  return (
    <>
      {/* Sidebar-1 Start */}
      <div className="backgound-div">
        <button className="btn-homePage">
          <img
            src="/img/Header/icon-spotify.png"
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
        <div style={{ display: "flex" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Legal" : "Pháp lý"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en"
              ? "Privacy Center"
              : "Trung tâm an toàn và quyền riêng tư"}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Privacy policy" : "Chính sách quyền riêng tư"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Cookie" : "Cookie"}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en"
              ? "Introducing advertising"
              : "Giới thiệu quảng cáo"}
          </p>
          <p className="color-text" style={{ marginRight: "10px" }}>
            {language === "en" ? "Accessibility support" : "Hỗ trợ tiếp cận"}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="color-text" style={{ marginRight: "40px" }}>
            {language === "en" ? "Cookie" : "Cookie"}
          </p>
        </div>
        {/* Thêm các mục khác với điều kiện ngôn ngữ tương ứng */}
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
          {(!language || language === "") && (
            <option className="option-select" value="">
              {language === "en" ? "Select Language" : "Chọn Ngôn Ngữ"}
            </option>
          )}
          <option className="option-select" value="vn">Việt Nam</option>
          <option className="option-select" value="en">English</option>
          {/* Thêm các ngôn ngữ khác nếu cần */}
        </select>
      </div>
    </>
  );
}
export default Sidebar;
