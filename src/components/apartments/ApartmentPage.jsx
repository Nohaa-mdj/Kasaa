/*import React from "react";
import "./ApartmentPage.scss";
import Dropdown from "../Dropdown";
import Star from "../Stars";

function ApartmentPage() {
  const rating = 4;
  return (
    <div className="apartment-page">
      <div className="img1">
        <img src="/app1.png" alt="appartement1" />
      </div>
      <div className="apartments">
        <div className="apartment-header">
          <div className="apartment-infos">
            <h1 className="appartment-page__title">
              Cozy loft on the Canal Saint Martin
            </h1>
            <h2 className="appartment-page__subtitle">Paris, Ile-de-France</h2>
            <div className="apartment-tags">
              <p className="tag">Cozy</p>
              <p className="tag">Canal</p>
              <p className="tag">Paris 10</p>
            </div>
          </div>
        </div>
        <div className="apartment__owner">
          <div className="owner-infos">
            <h3>Alexandre Dumas</h3>
            <div className="badge"></div>
          </div>
          <div className="apartment-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < rating} />
            ))}
          </div>
        </div>
      </div>
      <div className="apartment__dropdowns">
        <Dropdown title="Description">
          <p>
            Vous serez à 50m du canal Saint Martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au coeur de Paris
            avec 5 lignes de métros et de nombreux bus. Logement parfait pour,
            les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1
            stattion de la Gare de l'Est (7 minutes à pieds).
          </p>
        </Dropdown>

        <Dropdown title="Équipements">
          <ul>
            <li>Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default ApartmentPage;*/

import React from "react";
import { useParams } from "react-router-dom";
import apartments from "../../../data.json";
import Dropdown from "../Dropdown";

import "./ApartmentPage.scss";
import Star from "../Stars";

function ApartmentPage() {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === id);

  if (!apartment) return <p>Appartement introuvable</p>;

  const rating = parseInt(apartment.rating);

  return (
    <div className="apartment-page">
      <div className="img1">
        <img src={apartment.cover} alt={apartment.title} />
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
