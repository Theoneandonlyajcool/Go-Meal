import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import HeritageKitchen from "../Pages/HeritageKitchen";
import KaylizsKitchen from "../Pages/KaylizsKitchen";
import MamaKitchen from "../Pages/MamaKitchen";
import PreferredKitchen from "../Pages/PreferredKitchen";
import RennesKitchen from "../Pages/RennesKitchen";
import AkeemKitchens from "../Pages/AkeemKitchens";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/heritage" element={<HeritageKitchen />}></Route>
          <Route path="/kayliz" element={<KaylizsKitchen />}></Route>
          <Route path="/mama" element={<MamaKitchen />}></Route>
          <Route path="/preffered" element={<PreferredKitchen />}></Route>
          <Route path="/Rennes" element={<RennesKitchen />}></Route>
          <Route path="/payment" element={<AkeemKitchens />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
