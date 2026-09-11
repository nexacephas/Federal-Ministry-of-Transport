import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  CarFront,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  Landmark,
  Ship,
  TrainFront,
} from 'lucide-react';

import './OnlineServices.css';

const SERVICES = [
  {
    code: 'SRV-01',
    name: 'Rail e-Ticketing',
    description: 'Book and pay for intercity rail travel in advance.',
    href: 'https://nrc.tps.ng/',
    icon: TrainFront,
  },
  {
    code: 'SRV-02',
    name: "Driver's Licence",
    description: 'Apply for a new licence or renew an existing one.',
    href: 'https://www.nigeriadriverslicence.org/',
    icon: CarFront,
  },
  {
    code: 'SRV-03',
    name: 'Vehicle Registration',
    description: 'Register a new vehicle or transfer ownership.',
    href: 'https://www.evrs.ng/',
    icon: FileCheck2,
  },
  {
    code: 'SRV-04',
    name: 'Ports Tariffs',
    description: 'Check current published tariffs for Nigerian ports.',
    href: 'https://nigerianports.gov.ng/port-tariffs/',
    icon: Ship,
  },
  {
    code: 'SRV-05',
    name: 'Single Window Trade Portal',
    description: 'Submit and track cross-border trade documentation.',
    href: 'http://trade.gov.ng',
    icon: Globe2,
  },
  {
    code: 'SRV-06',
    name: 'Official Exchange Rate',
    description: 'View the official CBN foreign exchange rate.',
    href: 'https://www.cbn.gov.ng/rates/ExchRateByCurrency.asp',
    icon: CircleDollarSign,
  },
  {
    code: 'SRV-07',
    name: 'Vehicle Inspection (CVIS)',
    description: 'Book a computerized vehicle inspection appointment.',
    href: 'https://cvis.ng',
    icon: CarFront,
  },
  {
    code: 'SRV-08',
    name: 'Courier Services Registration',
    description: 'Register a courier service with NIPOST.',
    href: 'https://www.nipost.gov.ng/',
    icon: Landmark,
  },
];

function OnlineServices() {
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
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services ${isVisible ? 'services--visible' : ''}`}
      id="services"
    >
      <div className="services__inner">

        <div className="services__header">
          <div className="services__heading-group">
            <span className="services__eyebrow">
              <span className="services__eyebrow-line" />
              Digital Access
            </span>

            <h2 className="services__heading">
              Essential services,
              <span> one click away.</span>
            </h2>

            <p className="services__intro">
              Access selected transportation services and government
              platforms online without unnecessary queues or paperwork.
            </p>
          </div>

          <div className="services__header-side">
            <span className="services__service-count">
              08
            </span>
            <span>Online services</span>
          </div>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="services__card"
                key={service.code}
                style={{ '--service-index': index }}
              >
                <div className="services__card-top">
                  <span className="services__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="services__code">
                    {service.code}
                  </span>
                </div>

                <div className="services__icon">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div className="services__content">
                  <h3 className="services__name">
                    {service.name}
                  </h3>

                  <p className="services__description">
                    {service.description}
                  </p>
                </div>

                <div className="services__card-footer">
                  <span>Open service</span>

                  <span className="services__arrow">
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="services__bottom">
          <div className="services__bottom-mark">
            <span />
            <span />
            <span />
          </div>

          <p>
            Services open in their respective official platforms.
          </p>

          <ArrowUpRight size={15} strokeWidth={1.8} />
        </div>

      </div>
    </section>
  );
}

export default OnlineServices;