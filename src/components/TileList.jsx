import React, { useEffect, useState } from "react";
import Tilepic from "./Tilepic";
import { Link } from "react-router-dom";

function TileList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/annonces.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setItems(data);
      })
      .catch((error) =>
        console.error("Erreur de chargement des annonces:", error)
      );
  }, []);

  return (
    <div className="tile-list">
      {items.map((item) => (
        <Link to={`/logement/${item.id}`}>
          <Tilepic
            key={item.id}
            title={item.title}
            cover={item.cover}
            id={item.id}
          />
        </Link>
      ))}
    </div>
  );
}

export default TileList;
