import SmoothScrollProvider from "@/utils/SmoothScrollProvider";
import "./globals.css";
import Header from "@/components/common/Header";


export const metadata = {
  title: "Vintora",
  description: "Discover the world of vintage fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Header />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
