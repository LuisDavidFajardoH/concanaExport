'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '#origen', label: 'ORIGEN' },
  { href: '#sabores', label: 'SABORES' },
  { href: '#exportacion', label: 'EXPORTACIÓN' },
  { href: '#contacto', label: 'CONTACTO' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={(e) => handleNavClick(e, '#inicio')}>
          CONCANA EXPORT
        </a>

        <nav className={styles.nav} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={styles.ctaBtn}
          onClick={(e) => handleNavClick(e, '#contacto')}
        >
          SOLICITAR MUESTRA
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className={styles.mobileCta}
          onClick={(e) => handleNavClick(e, '#contacto')}
        >
          SOLICITAR MUESTRA
        </a>
      </div>
    </header>
  );
}
