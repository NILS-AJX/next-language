import Navbar from "app/components/Navbar/page";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Internacionalización",
  description: "Internacionalización",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
