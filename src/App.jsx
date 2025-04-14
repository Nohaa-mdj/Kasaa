import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Banner from "./components/Banner.jsx";
import ApartmentGrid from "./components/apartments/ApartmentGrid.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/about.jsx";
import NotFound from "./components/NotFound.jsx";
import ApartmentPage from "./components/apartments/ApartmentPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Banner />
              <ApartmentGrid />
            </Main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<ApartmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
