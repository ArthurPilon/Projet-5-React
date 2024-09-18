import Footer from "../components/Footer";
import Header from "../components/Header";
import TileList from "../components/TileList";
import Banner from "../components/Banner";

export default function Accueil() {
  return (
    <>
      <Header />

      <div>
        <Banner>
          <img
            src="src/assets/images/Image source 1backgroung_baner.jpg"
            alt="Photo d'une crique"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>

        <div id="img-galery">
          <TileList />
        </div>
      </div>
      <Footer />
    </>
  );
}
