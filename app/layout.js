import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "MaroonMode | Wear Your Confidence",
  description: "A fashion collection demo built with Next.js."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="footer">
          <div>
            <h2>MAROONMODE.</h2>
            <p>Fashion that speaks before you do.</p>
          </div>
          <p>© 2026 MaroonMode. Educational demo website.</p>
        </footer>
      </body>
    </html>
  );
}
