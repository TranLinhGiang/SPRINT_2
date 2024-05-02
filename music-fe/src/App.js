// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/HomePage/LoginPage";
import HomePageAdmin from "./components/HomePage/HomePageAdmin";
import SpotifyList from "./components/HomePage/SpotifyListAdmin";
import CreateSpotify from "./components/HomePage/SpotifyCreate";
import SearchSpotifyUserLogin from "./components/HomePage/SearchSpotifyUserLogin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/admin" element={<HomePageAdmin />} />
          <Route path="/list" element={<SpotifyList />} />
          <Route path="/add" element={<CreateSpotify />} />
          <Route path="/search" element={<SearchSpotifyUserLogin />} />
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
