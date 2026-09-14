import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

import './Footer.css';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'News & Events', href: '#news' },
  { label: 'E-Services', href: '#services' },
];

const E_SERVICES = [
  {
    label: 'Rail e-Ticketing',
    href: 'https://nrc.tps.ng/',
  },
  {
    label: 'Ports Tariffs',
    href: 'https://nigerianports.gov.ng/port-tariffs/',
  },
  {
    label: "Driver's Licence",
    href: 'https://www.nigeriadriverslicence.org/',
  },
  {
    label: 'Vehicle Registration',
    href: 'https://www.evrs.ng/',
  },
];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'http://facebook.com/transportation.gov',
    icon: MessageCircle,
  },
  {
    label: 'Twitter / X',
    href: 'https://www.twitter.com/MinTransportNG/',
    icon: null,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/transportchroniclesng/',
    icon: Camera,
  },
];

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? 'footer--visible' : ''}`}
    >
      <div className="footer__top-line" />

      <div className="footer__inner">
        <div className="footer__main">
          <div className="footer__identity">
            <div className="footer__identity-mark">
              <Building2 size={21} strokeWidth={1.6} />
            </div>

            <div>
              <span className="footer__eyebrow">
                Federal Republic of Nigeria
              </span>

              <h2 className="footer__title">
                Federal Ministry
                <span> of Transportation.</span>
              </h2>
            </div>

            <p className="footer__description">
              Coordinating policies, infrastructure and services
              that keep people, goods and markets moving across
              Nigeria.
            </p>

            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <MapPin size={16} strokeWidth={1.7} />
                <span>
                  Bukar Dipcharima House, Central Business
                  District, FCT, Abuja, Nigeria.
                </span>
              </div>

              <div className="footer__contact-item">
                <Clock3 size={16} strokeWidth={1.7} />
                <span>Mon – Fri: 8:00am – 4:00pm</span>
              </div>

              <div className="footer__contact-item">
                <Mail size={16} strokeWidth={1.7} />
                <a href="mailto:info@transportation.gov.ng">
                  info@transportation.gov.ng
                </a>
              </div>

              <div className="footer__contact-item">
                <Phone size={16} strokeWidth={1.7} />
                <span>Official Ministry Contact</span>
              </div>
            </div>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <div className="footer__column-heading">
                <span>01</span>
                <h3>Explore</h3>
              </div>

              <ul className="footer__list">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <div className="footer__column-heading">
                <span>02</span>
                <h3>Digital Services</h3>
              </div>

              <ul className="footer__list">
                {E_SERVICES.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <div className="footer__column-heading">
                <span>03</span>
                <h3>Connect</h3>
              </div>

              <ul className="footer__list footer__list--social">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="footer__social-icon">
                          {Icon ? (
                            <Icon
                              size={15}
                              strokeWidth={1.8}
                            />
                          ) : (
                            <span className="footer__x-icon">
                              X
                            </span>
                          )}
                        </span>

                        <span>{social.label}</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.8}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__statement">
          <div className="footer__statement-mark">
            <span />
            <span />
            <span />
          </div>

          <p>
            Connecting people. Moving goods. Advancing Nigeria.
          </p>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Federal Ministry of
            Transportation, Nigeria
          </span>

          <div className="footer__bottom-links">
            <span>Official Government Website</span>
            <span className="footer__bottom-dot" />
            <span>Redesign Concept</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;