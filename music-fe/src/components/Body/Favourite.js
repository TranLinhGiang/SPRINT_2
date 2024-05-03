import "../../Css/Favourite.css";
import SidebarUser from "../Sidebar/SidebarUser";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "./../redux/slide/CardSlide";

function Favourite() {
  // Redux Start
  const cardSongs = useSelector((state) => state.card.songArray);
  console.log("Danh sách yêuthihs");
  console.log(cardSongs);
  const dispatch = useDispatch();
  // Redux End

  return (
    <div className="display-flex-favourite">
      <div className="col-md-1 col-lg-1">
        <SidebarUser />
      </div>
      <div className="col-md-7 col-lg-7">
        <h1>Danh sách nhạc yêu thích</h1>
        {cardSongs.map((item) => (
          <div>
            <img src={item.image}></img>
            <p>{item.title}</p>
            <p>{item.artist}</p>
          </div>
        ))}
      </div>
      <div className="col-md-4 col-lg-4">Phần detail</div>
    </div>
  );
}
export default Favourite;
