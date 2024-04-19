import "../../Css/SidebarUser.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

function SidebarUser() {
  return (
    <div className="div-sidebar-user">
      <div style={{ background: "#353232", "border-radius": "6px" }}>
        <div className="div-btn-sidebar-user">
          <button className="btn-sidebar-user">
            <HomeIcon
              style={{ color: "white", width: "50px", height: "35px" }}
            />
          </button>
        </div>

        <div className="div-btn-sidebar-user">
          <button className="btn-sidebar-user">
            <SearchIcon
              style={{ color: "white", width: "50px", height: "35px" }}
            />
          </button>
        </div>
      </div>
      <br />
      <div style={{ background: "#353232", "border-radius": "6px" }}>
        <div className="div-btn-sidebar-user">
          <button className="btn-sidebar-user">
            <FavoriteBorderIcon
              style={{ color: "white", width: "50px", height: "35px" }}
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
