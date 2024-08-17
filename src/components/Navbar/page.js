"use client"; // Añade esta línea al principio

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale || "en"; // Obtén el locale actual o usa 'en' como predeterminado

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href={`/${locale}`}>
          Brasper
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
              <Link className="nav-link" href={`/${locale}`}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/services`}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/AboutUs`}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${locale}/AboutUs`}>
                Contactanos
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
