import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutUs() {
  const t = useTranslations("About");

  console.log("useTranslations returned:", t);

  if (typeof t !== "function") {
    console.error("Translation function `t` is not a function:", t);
    return <div>Error loading translations</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{t("Title")}</h1>
      <section className="mb-5">
        <h2>{t("Mission")}</h2>
        <p>
        {t("Mission_cont")}
        </p>
      </section>
      <p>{t("About")}</p>
    </div>
  );
}
