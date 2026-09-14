import { CheckCircle2, Landmark } from 'lucide-react';
import { useEffect, useState } from 'react';

import './FCSSIP.css';

import fcssipImage from '../../assets/fcssip.jpg';
import fcssipSecondImage from '../../assets/fcssip2.jpg';

const FCSSIP_IMAGES = [
  {
    src: fcssipImage,
    alt: 'Federal Civil Service Strategy and Implementation Plan cover',
  },
  {
    src: fcssipSecondImage,
    alt: 'Federal Civil Service Strategy and Implementation Plan document',
  },
];

function FCSSIP() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveImage((currentImage) => (
        (currentImage + 1) % FCSSIP_IMAGES.length
      ));
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="fcssip" id="fcssip">
      <div className="fcssip__inner">

        <div className="fcssip__visual">
          <div className="fcssip__image-frame">
            {FCSSIP_IMAGES.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                aria-hidden={index !== activeImage}
                className={`fcssip__image ${index === activeImage ? 'fcssip__image--active' : ''}`}
                decoding="async"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}

            <div className="fcssip__image-overlay">
              <span className="fcssip__image-tag">
                Federal Government Strategy
              </span>
            </div>
          </div>

          <div className="fcssip__visual-caption">
            <span className="fcssip__caption-line" />
            <span>
              Federal Civil Service Strategy & Implementation Plan
            </span>
          </div>
        </div>

        <div className="fcssip__content">

          <span className="fcssip__eyebrow">
            <span className="fcssip__eyebrow-icon">
              <Landmark size={15} strokeWidth={1.8} />
            </span>
            Institutional Reform
          </span>

          <h2 className="fcssip__heading">
            Building a more effective and modern public service.
          </h2>

          <p className="fcssip__intro">
            The Federal Civil Service Strategy and Implementation Plan
            provides a framework for transforming the civil service,
            strengthening institutional performance and improving the
            quality of public service delivery.
          </p>

          <div className="fcssip__highlights">

            <div className="fcssip__highlight">
              <span className="fcssip__highlight-icon">
                <CheckCircle2 size={18} strokeWidth={1.8} />
              </span>

              <div>
                <h3>Service improvement</h3>
                <p>
                  Supporting more efficient and responsive public
                  institutions.
                </p>
              </div>
            </div>

            <div className="fcssip__highlight">
              <span className="fcssip__highlight-icon">
                <CheckCircle2 size={18} strokeWidth={1.8} />
              </span>

              <div>
                <h3>Institutional transformation</h3>
                <p>
                  Strengthening systems, processes and organisational
                  capacity across the civil service.
                </p>
              </div>
            </div>

            <div className="fcssip__highlight">
              <span className="fcssip__highlight-icon">
                <CheckCircle2 size={18} strokeWidth={1.8} />
              </span>

              <div>
                <h3>Better public service delivery</h3>
                <p>
                  Promoting a professional, productive and citizen-focused
                  public service.
                </p>
              </div>
            </div>

          </div>

          <div className="fcssip__actions">
            <span className="fcssip__period">
              Strategy period · 2021–2025
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FCSSIP;