"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locales = ["en", "es"];

  // Obtener el locale actual de la URL o de localStorage
  const getInitialLocale = () => {
    // Intenta obtener el locale del localStorage
    const storedLocale = typeof window !== "undefined" && localStorage.getItem("locale");
    return storedLocale || pathname.split("/")[1] || "en";
  };

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale);

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value;

    // Reemplaza el locale actual en la URL con el nuevo locale
    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${selectedLocale}`
    );

    // Guarda el nuevo locale en localStorage
    localStorage.setItem("locale", selectedLocale);

    // Navega a la nueva ruta con el locale seleccionado
    router.push(newPathname);

    // Actualiza el estado del locale actual
    setCurrentLocale(selectedLocale);
  };

  // Ordena los locales para que el seleccionado esté arriba
  const sortedLocales = [
    currentLocale,
    ...locales.filter((loc) => loc !== currentLocale),
  ];

  return (
    <div className="d-flex justify-content-end align-items-center">
      <label htmlFor="languageSwitcher" className="me-2 text-white">
        Idioma:
      </label>
      <select
        id="languageSwitcher"
        value={currentLocale}
        onChange={handleLocaleChange}
        className="form-select"
        style={{ maxWidth: "150px" }}
      >
        {sortedLocales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
