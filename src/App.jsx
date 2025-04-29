import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Banner />
              <ApartmentGrid apartments={apartments} />
            </Main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/apartment/:id"
          element={<ApartmentPage apartments={apartments} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
