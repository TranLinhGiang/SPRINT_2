import { useEffect } from "react";
import "../../Css/HomePage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Title } from "@mui/icons-material";
import Body from "../Body/Body";
import Footer from "../Footers/Footer";

function HomePage() {
  useEffect(() => {
    document.title = "Spotify-Web Player: Music for averyone";
  });
  return (
    <>
      <div className="home-page">
        <div className="display" style={{ padding: "5px" }}>
          <div className="col-xs-0 col-md-3 col-lg-3">
            <Sidebar />
          </div>
          <div className=" col-xs-12 col-md-9 col-lg-9">
            <div className="pading-header">
              <Header />
              <br />
              <Body />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
