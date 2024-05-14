import { Link } from "react-router-dom";
import "../../Css/SidebarAdmin.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
function SidebarAdmin() {
  return (
    <>
      <div className="div-detail-admin">
        <br />
        <br />
        <div className="button-sideba-admin">
          <Link to={"/list"}>
            <button className="btn-sidebar-admin">
              <QueueMusicIcon style={{height: '46px', width: '33px'}}/>
            </button>
          </Link>
        </div>
        <div className="button-sideba-admin">
          <Link to={"/add"}>
            <button className="btn-sidebar-admin">
              <AddIcon style={{height: '46px', width: '33px'}}/>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default SidebarAdmin;
