import React from "react";
import "./ApartmentGrid.scss";
import Apartment from "../Apartment";

function ApartmentGrid({ apartments }) {
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
