import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Home from "./pages/home-page";
import "./App.css";
import InfoPage from "./pages/info-page";
import Layout from "./components/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="info" element={<InfoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
