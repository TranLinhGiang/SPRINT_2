import { Link } from "react-router-dom";
import "../../Css/SidebarAdmin.css";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddIcon from '@mui/icons-material/Add';
function SidebarAdmin(){
    return(
        <>
        <div>
            <br/>
            <br/>
            <div>
                <Link to={"/list"}>
                <button className="btn-sidebar-admin"><LibraryBooksIcon/> Kho nhạc</button>
                </Link>
                <br/>
                <br/>
                <Link to={"/add"}>
                <button className="btn-sidebar-admin"><AddIcon /> Thêm </button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default SidebarAdmin;