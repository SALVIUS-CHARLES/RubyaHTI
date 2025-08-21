import "./globals.css";
import Navbar from "./components/Navbar"; // Adjust path if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Segoe UI', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
