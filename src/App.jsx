import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </Router>
  );
}
