import React from "react";
import { Link } from "react-router-dom";
import "./Apartment.scss";

function Apartment({ apartment }) {
  return (
    <div
      className="apartment"
      style={{ backgroundImage: `url(${apartment.cover})` }}
    >
      <Link to={`/apartment/${apartment.id}`} className="apartment">
        <div className="apartment__subtitle">{apartment.title}</div>
      </Link>
    </div>
  );
}

export default Apartment;
