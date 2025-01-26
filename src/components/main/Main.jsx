import React from "react";
import Card from "../card/Card";
import carsData from "../../data/carsData";
import "./main.css";

function Main() {
  return (
    <main>
      <div className="catalogue-header">
        <h1 className="catalogue-title">Cars Catalogue</h1>
        <span className="catalogue-count">{carsData.length} Cars</span>
      </div>
      <div className="cards-container">
        {carsData.map((car, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
    </main>
  );
}

export default Main;
