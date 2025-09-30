import SmoothScrollProvider from "@/utils/SmoothScrollProvider";
import "./globals.css";
import Header from "@/components/common/Header";

import { AppProvider } from "@/contexts";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Vintora",
  description: "Discover the world of vintage fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased w-full`}>
        <AppProvider>
          <Header />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
