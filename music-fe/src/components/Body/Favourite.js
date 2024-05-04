import "../../Css/Favourite.css";
import SidebarUser from "../Sidebar/SidebarUser";
import * as method from "../../Service/method";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "./../redux/slide/CardSlide";
import { useEffect, useState } from "react";
import HeaderFavourite from "../Header/HeaderFavourite";
import DetailLoginPage from "./DetailLoginPage";
import Table from "react-bootstrap/Table";
import "../../Css/HeaderFacourite.css";

function Favourite() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const getAllSong = async () => {
      try {
        let aa = [];
        let x = localStorage.getItem("favourite").split(",");
        const result = await method.getAllSong();
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < x.length; j++) {
            if (result[i].id == x[j]) {
              aa.push(result[i]);
              break;
            }
          }
        }
        console.log(aa);
        setSongs(aa);
      } catch (e) {
        console.log(e);
      }
    };
    getAllSong();
  }, []);

  if (!songs) {
    return <pan>Loading...</pan>;
  }

  return (
    <div className="display-flex-favourite">
      <div className="col-sm-1 col-md-1 col-lg-1">
        <SidebarUser />
      </div>
      <div
        className="col-sm-11 col-md-11 col-lg-11 display-flex-favourite"
        style={{ "flex-wrap": "wrap", height: "100vh" }}
      >
        <div className="col-sm-8 col-lg-8 container">
          {/* <nav
            class=" with-navba navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a class="navbar-brand p-0">
              <h1 class="m-0">Yêu thích</h1>
            </a>

            <hr style={{ color: "white" }} />
          </nav> */}
          <div className="favoritetitle">
            <h3>Nhạc yêu thích</h3>
            <br />
            <br />
            <br />
            <div style={{ background: 'red'}} className="display-flex-favourite">
              <div>Phần Số thứ tự</div>
              <div>Phần để bấm phát nhạc</div>
              <div>Nút xóa yêu thích</div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <DetailLoginPage />
        </div>
      </div>
    </div>
  );
}
export default Favourite;
