import "../../Css/SidebarUser.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function SidebarUser() {
  return (
    <div className="div-sidebar-user">
      <div style={{ background: "#353232", "border-radius": "6px" }}>
        <div className="div-btn-sidebar-user">
          <Link to={"/loginPage"}>
          <button className="btn-sidebar-user">
            <HomeIcon
              style={{ color: "white", width: "50px", height: "35px" }}
            />
          </button>
          </Link>
          
        </div>

        <div className="div-btn-sidebar-user">
          <Link to={"/search"} className="btn-sidebar-user">
            <SearchIcon
              style={{ color: "white", width: "100%", height: "35px" }}
            />
          </Link>
        </div>
      </div>
      <br />
      <div style={{ background: "#353232", "border-radius": "6px" }}>
        <div className="div-btn-sidebar-user">
          <button className="btn-sidebar-user">
            <FavoriteBorderIcon
              style={{ color: "white", width: "100%", height: "35px" }}
            />
          </button>
        </div>

        <div className="div-btn-sidebar-user">
          
        </div>
      </div>
    </div>
  );
}
export default SidebarUser;
