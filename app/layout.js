import "./globals.css";
import "leaflet/dist/leaflet.css";
import Topbar from "../components/Topbar.jsx";
import Navbar from "../components/Navbar.jsx";

export const metadata = {
  title: "CRC",
  description: "The best Research Company in Cox's Bazar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
