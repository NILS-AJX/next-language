"use client"; // Asegúrate de que este archivo es un componente del cliente

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";

// Traducciones manuales
const translations = {
  en: {
    brandName: "Nito",
    home: "Home",
    services: "Services",
    aboutUs: "About Us",
    contactUs: "Contact Us",
  },
  es: {
    brandName: "Nito",
    home: "Inicio",
    services: "Servicios",
    aboutUs: "Nosotros",
    contactUs: "Contáctanos",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en"); // Predeterminado a "en"
  const router = useRouter();

  // Cargar el idioma desde localStorage al montar el componente
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "en";
    setCurrentLocale(storedLocale);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Obtener las traducciones basadas en el locale actual
  const t = translations[currentLocale];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href={`/${currentLocale}`}>
          {t.brandName} {/* Traducción de la marca */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href={`/${currentLocale}`}>
                {t.home} {/* Traducción de "Inicio" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${currentLocale}/services`}>
                {t.services} {/* Traducción de "Servicios" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${currentLocale}/AboutUs`}>
                {t.aboutUs} {/* Traducción de "Nosotros" */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${currentLocale}/contact`}>
                {t.contactUs} {/* Traducción de "Contáctanos" */}
              </Link>
            </li>
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
