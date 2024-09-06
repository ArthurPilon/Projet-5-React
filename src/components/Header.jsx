import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div id="logo">
          <Link to="/">
            <img src="src/assets/icons/LOGOlogokasa .png" alt="Logo Kasa" />
          </Link>
        </div>
        <div id="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
