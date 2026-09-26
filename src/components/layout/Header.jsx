import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../common/BrandLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "Contest", href: "#contest" },
  { label: "Contact", href: "#contact" },
];

function Header({ menuOpen, onToggleMenu, onCloseMenu, onRegister }) {
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCloseMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, onCloseMenu]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#home" onClick={onCloseMenu}>
          <BrandLogo light />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={onToggleMenu}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={onCloseMenu}>
              {link.label}
            </a>
          ))}
          <button
            className="button button--accent site-nav__button"
            type="button"
            onClick={() => {
              onCloseMenu();
              onRegister();
            }}
          >
            Register Now <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
