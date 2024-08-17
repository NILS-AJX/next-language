import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  console.log("useTranslations returned:", t);

  if (typeof t !== "function") {
    console.error("Translation function `t` is not a function:", t);
    return <div>Error loading translations</div>;
  }

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
