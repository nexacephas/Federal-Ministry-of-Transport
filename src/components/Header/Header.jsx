// src/components/Header/Header.jsx

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import logo from '../../assets/coat-of-arms.png';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'FCSSIP', href: '#fcssip' },
  { label: 'Departments', href: '#departments' },
  { label: 'News & Events', href: '#news' },
  { label: 'E-Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">

        {/* Brand */}
        <Link
          to="/"
          className="header__brand"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="Coat of Arms of Nigeria"
            className="header__crest"
          />

          <div className="header__titles">
            <span className="header__country">
              Federal Republic of Nigeria
            </span>

            <span className="header__name">
              Ministry of Transportation
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          ref={navRef}
          id="main-navigation"
          className={`header__nav ${
            isMenuOpen ? 'header__nav--open' : ''
          }`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={pathname === '/' ? link.href : `/${link.href}`}
              className="header__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">

          <a
            href={pathname === '/' ? '#services' : '/#services'}
            className="header__cta"
            onClick={handleNavClick}
          >
            E-Services
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={`header__toggle ${
              isMenuOpen ? 'header__toggle--open' : ''
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;