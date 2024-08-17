"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locales = ["en", "es"];

  // Obtén el locale actual de la URL directamente
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value;

    // Reemplaza el locale actual en la URL con el nuevo locale
    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${selectedLocale}`
    );

    router.push(newPathname);
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
