"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Academics", href: "/academics" },
  { name: "Career", href: "/career" },
  { name: "Money", href: "/money" },
  { name: "College Life", href: "/college-life" },
  { name: "Productivity", href: "/productivity" },
  { name: "Tools", href: "/tools" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">✦</span>
          <span>College Survival Guide</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}