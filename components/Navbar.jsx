"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" }
  ];

  return (
    <header className="navbar">
      <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
        MAROON<span>MODE.</span>
      </Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
            className={pathname === link.href || (link.href === "/collections" && pathname.startsWith("/product/")) ? "active" : ""}>
            {link.name}
          </Link>
        ))}
      </nav>
      <Link href="/collections" className="nav-shop">Explore Collection ↗</Link>
    </header>
  );
}
