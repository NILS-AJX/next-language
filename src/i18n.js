import { getRequestConfig } from "next-intl/server";

// Define los locales soportados
const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  // Verifica que el `locale` sea válido
  if (!locales.includes(locale)) {
    return {
      notFound: true,
    };
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
