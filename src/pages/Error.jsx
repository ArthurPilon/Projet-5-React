import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Erorr() {
  return (
    <>
      <Header />

      <div className="error404">
        <h1>
          <span>404</span>
        </h1>
        <h2>La page recherché n'existe pas</h2>
      </div>
      <Footer />
    </>
  );
}
