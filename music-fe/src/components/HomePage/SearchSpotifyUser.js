import "../../Css/SearchSpotifyUser.css";
import SidebarUser from './../Sidebar/SidebarUser';
import LoginPage from './LoginPage';
function SearchSpotifyUser(){
    return(
      
        <div className="display-search-homepage">
          <div className="col-md-1 col-lg-1">
            <SidebarUser/>
          </div>
          <div className="col-md-8 col-lg-8" style={{background: 'blue'}}>
            
          </div>
          <div className="col-md-3 col-lg-3" style={{background: 'green'}}>
            Detail
          </div>
        </div>
      
    )
}
export default SearchSpotifyUser;