import { useEffect } from "react";
import "../../Css/HomePage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footers/Footer";
import { useState } from "react";

function HomePage() {
  const [songs, setSongs]= useState([]);
  const [language, setLanguage] = useState(""); // State to manage language


  
  // Function to change language
  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  useEffect(() => {
    document.title = "Spotify-Web Player: Music for averyone";
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="home-page"
      
      >
        <div className="display" style={{ padding: "5px" }}>
          <div className="col-xs-0 col-md-3 col-lg-3">
          <Sidebar language={language} changeLanguage={changeLanguage} />
          </div>
          <div className=" col-xs-12 col-md-9 col-lg-9">
            <div className="pading-header">
              <Header  language={language}/>
              <br />
              <Body  language={language}/>
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
}
export default HomePage;
