import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage/HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/HomePage/LoginPage";
import { useState } from "react";
import BodyLoginPage from "./components/Body/BodyLoginPage";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left" // Điều chỉnh vị trí của toast ở góc bên trái dưới cùng
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
