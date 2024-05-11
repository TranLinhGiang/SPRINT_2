import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePageAdmin from "./components/HomePage/HomePageAdmin";
import SpotifyList from "./components/HomePage/SpotifyListAdmin";
import CreateSpotify from "./components/HomePage/SpotifyCreate";
import SearchSpotifyUserLogin from "./components/HomePage/SearchSpotifyUserLogin";
import Favourite from "./components/Body/Favourite";
import BodyLoginPage from "./components/Body/BodyLoginPage";
import Upgrade from "./components/Body/Upgrade";
import Paypal from "./components/Body/Paypal";


function App() {
  const [language, setLanguage] = useState(""); // State to manage language
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage language={language}/>} />
          <Route path="/loginPage" element={<BodyLoginPage language={language}/>} />
          <Route path="/admin" element={<HomePageAdmin />} />
          <Route path="/list" element={<SpotifyList />} />
          <Route path="/add" element={<CreateSpotify />} />
          <Route path="/search" element={<SearchSpotifyUserLogin />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/upgrade" element={<Upgrade></Upgrade>}/>
          <Route path="/pay" element={<Paypal></Paypal>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
  );
}

export default App;
