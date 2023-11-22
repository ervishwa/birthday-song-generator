import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Home from "./pages/home-page";
import "./App.css";
import InfoPage from "./pages/info-page";
import Layout from "./components/Layout";
import UserChoicePage from "./pages/user-choices-page";
import MoreInfo from "./pages/more-info-page";
import LyricsPage from "./pages/song-lyrics-page";
import Loader from "./components/Loader";
import DownloadPage from "./pages/download-page";

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
          <Route path="lyrics" element={<LyricsPage />}></Route>
          <Route path="moreInfo" element={<MoreInfo />}></Route>
          <Route path="loader" element={<Loader />}></Route>
          <Route path="download" element={<DownloadPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
