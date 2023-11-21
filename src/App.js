import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Home from "./pages/home-page";
import "./App.css";
import InfoPage from "./pages/info-page";
import Layout from "./components/Layout";
import UserChoicePage from "./pages/user-choices-page";
import MoreInfo from "./pages/more-info-page";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="info" element={<InfoPage />}></Route>
          <Route path="userchoice" element={<UserChoicePage />}></Route>
          <Route path="moreInfo" element={<MoreInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
