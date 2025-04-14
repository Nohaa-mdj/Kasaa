import React from "react";
import Dropdown from "./Dropdown";
import "./About.scss";
import Banner from "./Banner";
import "./Banner.scss";

function About() {
  return (
    <div className="about-page">
      <Banner image="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FBoWmKzzfUV13Kd5DcqvGVaK~3ttMwCJWYlehRfrIPyHpaUJ-~mbLYbJ-6imMJBScxV2X2WEOgL9-4Dc2nwf1blgSe3kNk6VKVfedmSFoJKotIfLoZ7SlyMg7pe7nKZhNemZTlQ5ihe5EUWZ-QUJP7z4LYQtMdBSKsa1VZERePF2RqctdyDkMvje8vQ3~GTwHIWBrDbcDoc5D~JKoh-33fdq00BdISKxf37pwY0CMZMUD8NjdB1Ic7SADcFkhWayRGjm5yOjaZsSrZOaPAik5TYqW46eHug1wMuHrykNfXxGHF-qHT2nZ9CbUIxpY0lSjed65WHsGpiTA0820XwDSw__" />

      <Dropdown title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Dropdown>

      <Dropdown title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou perturbateur entraînera une exclusion
          de notre plateforme.
        </p>
      </Dropdown>

      <Dropdown title="Service">
        <p>
          La qualoité du service est au coeur de notre engagement chez Kasa.
          Nous veillons à ce que chaque interraction, que ce soit avec nos hôtes
          ou nos locataires, soit empreinte de respect et de bienveillance.
        </p>
      </Dropdown>

      <Dropdown title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestiques pour nos hôtes.
        </p>
      </Dropdown>
    </div>
  );
}

export default About;
