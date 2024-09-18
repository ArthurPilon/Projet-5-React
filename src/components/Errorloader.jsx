import { Link } from "react-router-dom";

export default function Erorr() {
  return (
    <>
      <div className="error404">
        <h1>
          <span>404</span>
        </h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <div id="errorlink">
          <Link to="/">
            <p>Retouner sur la page d'acceuil</p>
          </Link>
        </div>
      </div>
    </>
  );
}
