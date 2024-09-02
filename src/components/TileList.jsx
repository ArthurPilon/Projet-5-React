import React, { useEffect, useState } from "react";
import Tilepic from "./Tilepic";

function TileList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // let p = fetch("/annonces.json");
    // p.then(function (s) {
    //   console.log("oui", s);
    //   let pjson = s.json();
    //   console.log(2, pjson);
    //   pjson.then(function (lejson) {
    //     console.log(3, lejson);
    //   });
    // });
    // console.log(p);

    fetch("public/annonces.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) =>
        console.error("Erreur de chargement des annonces:", error)
      );
  }, []);

  return (
    <div className="tile-list">
      {items.map((item) => (
        <Tilepic
          key={item.id}
          title={item.title}
          cover={item.cover}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default TileList;
