import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Anchor,
  GraduationCap,
  ShipWheel,
  TrainFront,
} from 'lucide-react';

import './AgenciesShowcase.css';

const AGENCIES = [
  {
    code: 'AGY-01',
    name: 'Nigerian Railway Corporation',
    description:
      'Operates and maintains the national rail network.',
    icon: TrainFront,
    href: '#',
  },
  {
    code: 'AGY-02',
    name: 'Nigerian Institute of Transport Technology',
    description:
      'Trains professionals for the transport sector, based in Zaria.',
    icon: GraduationCap,
    href: '#',
  },
  {
    code: 'AGY-03',
    name: 'Nigerian Shippers’ Council',
    description:
      'Regulates and protects the interests of shippers in Nigeria.',
    icon: Anchor,
    href: '#',
  },
  {
    code: 'AGY-04',
    name: 'Nigerian Maritime Administration and Safety Agency',
    description:
      'Oversees maritime safety, security and shipping regulation.',
    icon: ShipWheel,
    href: '#',
  },
];

function AgenciesShowcase() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`agencies ${
        isVisible ? 'agencies--visible' : ''
      }`}
    >
      <div className="agencies__inner">
        <div className="agencies__header">
          <div className="agencies__heading-group">
            <span className="agencies__eyebrow">
              <span className="agencies__eyebrow-line" />
              Parastatals
            </span>

            <h2 className="agencies__heading">
              The institutions
              <span> behind the system.</span>
            </h2>

            <p className="agencies__intro">
              Our agencies extend the Ministry’s mandate across
              rail, maritime transport, professional training and
              national logistics.
            </p>
          </div>

          <a href="#" className="agencies__see-all">
            <span>Explore all agencies</span>
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </a>
        </div>

        <div className="agencies__grid">
          {AGENCIES.map((agency, index) => {
            const Icon = agency.icon;

            return (
              <a
                href={agency.href}
                className="agencies__card"
                key={agency.name}
                style={{ '--agency-index': index }}
              >
                <div className="agencies__card-top">
                  <span className="agencies__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="agencies__code">
                    {agency.code}
                  </span>
                </div>

                <div className="agencies__icon">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div className="agencies__content">
                  <h3 className="agencies__name">
                    {agency.name}
                  </h3>

                  <p className="agencies__description">
                    {agency.description}
                  </p>
                </div>

                <div className="agencies__footer">
                  <span>Visit agency site</span>

                  <span className="agencies__arrow">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="agencies__bottom">
          <span className="agencies__bottom-line" />

          <p>
            Agencies operate within their respective mandates
            under the Federal Ministry of Transportation.
          </p>

          <span className="agencies__bottom-mark">
            FMOT
          </span>
        </div>
      </div>
    </section>
  );
}

export default AgenciesShowcase;