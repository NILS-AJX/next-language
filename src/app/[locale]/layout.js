import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Internacionalización",
  description: "Internacionalización",
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Error loading translations:", error);
    messages = {}; // Fallback a un objeto vacío si ocurre un error
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="max-w-6xl mx-auto">
            <Navbar />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
