import { useTranslations } from "next-intl";
import VideoPopup from "./components/video/page";
export default function HomePage() {
  const t = useTranslations("Home");

  console.log("useTranslations returned:", t);

  if (typeof t !== "function") {
    console.error("Translation function `t` is not a function:", t);
    return <div>Error loading translations</div>;
  }

  return (
    <div>
      <VideoPopup />
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
