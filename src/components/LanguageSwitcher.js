"use client";

import { useRouter, usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locales = ["en", "es"];

  // Mapeo de idiomas a labels personalizados y rutas de banderas
  const localeData = {
    en: { label: "English", flag: "/flags/en.png" },
    es: { label: "Español", flag: "/flags/es.png" },
  };

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
      <select
        id="languageSwitcher"
        value={currentLocale}
        onChange={handleLocaleChange}
        className="form-select"
        style={{ maxWidth: "200px" }}
      >
        {sortedLocales.map((loc) => (
          <option key={loc} value={loc}>
            <img
              src={localeData[loc].flag}
              alt={`${localeData[loc].label} flag`}
              style={{ width: "20px", marginRight: "8px" }}
            />
            {localeData[loc].label}
          </option>
        ))}
      </select>
    </div>
  );
}
