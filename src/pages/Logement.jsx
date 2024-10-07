import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

export default function Logement() {
  const params = useParams();
  let id = params.id;

  const [logement, setLogement] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/annonces.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAnnonce = data.find((a) => a.id === id);

        if (!foundAnnonce) {
          navigate("/error");
        } else {
          setLogement(foundAnnonce);
        }
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
        navigate("/error");
      });
  }, [id, navigate]);

  // Fonction pour les étoiles
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        // Si l'indice est inférieur ou égal au rating, étoile pleine
        stars.push(
          <svg
            key={"star" + i}
            width="24.75"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#FF6060"
            />
          </svg>
        );
      } else {
        // étoile grise
        stars.push(
          <svg
            key={"star" + i}
            width="24.75"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#E3E3E3"
            />
          </svg>
        );
      }
    }
    return stars;
  };

  if (logement)
    return (
      <>
        <Header />

        <div id="logement">
          {/* <img src={logement.cover} alt={logement.title} className="cover" /> */}
          <Carousel pictures={logement.pictures} />
          <div className="title-host">
            <h1>{logement.title}</h1>
            <div id="hostnamepicdesktop">
              <div>
                <span>{logement.host.name}</span>
              </div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div id="logement-description">
            <p>{logement.location}</p>
          </div>
          <div id="tags-rating">
            <div id="tags">
              {logement.tags &&
                logement.tags.map((tag, index) => <h2 key={index}>{tag}</h2>)}
            </div>
            <div id="ratingshost">
              <div id="rating">
                <div>{renderStars(logement.rating)}</div>{" "}
                {/* Appeler la fonction pour afficher les étoiles */}
              </div>
              <div id="hostnamepicmobile">
                <div>
                  <span>{logement.host.name}</span>
                </div>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>
          </div>
          <div id="logement-collapse">
            <Collapse
              key={logement.index}
              title="Description"
              content={logement.description}
            />
            <Collapse
              key={logement.index}
              title="Equipements"
              content={logement.equipments}
            />
          </div>
        </div>
        <Footer />
      </>
    );

  return null;
}
