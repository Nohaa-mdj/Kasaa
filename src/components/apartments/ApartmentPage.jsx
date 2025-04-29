import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Dropdown from "../Dropdown";
import "./ApartmentPage.scss";
import Star from "../Stars";

function ApartmentPage({ apartments }) {
  const { id } = useParams();

  const apartment = apartments.find((apt) => apt.id === id);

  if (!apartment) {
    return <Navigate to="/not-found" replace />;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!apartments || apartments.length === 0) {
    return <div>Chargement...</div>;
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
    );
  };

  const rating = parseInt(apartment.rating);

  return (
    <div className="apartment-page">
      <div className="gallery">
        <button className="arrow-left" onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={apartment.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button className="arrow-right" onClick={handleNext}>
          &#10095;
        </button>

        <div key={currentImageIndex} className="image-counter">
          {currentImageIndex + 1}/{apartment.pictures.length}
        </div>
      </div>

      <div className="apartments">
        <div className="apartment-header">
          <div className="apartment-infos">
            <h1 className="apartment-page__title">{apartment.title}</h1>
            <h2 className="apartment-page__subtitle">{apartment.location}</h2>
            <div className="apartment-tags">
              {apartment.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="apartment__owner">
            <div className="owner-infos">
              <h3>{apartment.host.name}</h3>
              <img
                className="badge"
                src={apartment.host.picture}
                alt={apartment.host.name}
              />

              <div className="apartment-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} active={i < rating} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="apartment__dropdowns">
          <Dropdown title="Description">
            <p>{apartment.description}</p>
          </Dropdown>

          <Dropdown title="Équipements">
            <ul>
              {apartment.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default ApartmentPage;
