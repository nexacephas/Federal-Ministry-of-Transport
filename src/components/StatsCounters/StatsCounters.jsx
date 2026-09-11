import { useEffect, useRef, useState } from 'react';
import { Activity, Building2, MapPinned, Route } from 'lucide-react';

import './StatsCounters.css';

const STATS = [
  {
    value: 4100,
    suffix: ' km',
    label: 'Rail line country-wide',
    icon: Route,
  },
  {
    value: 36,
    suffix: '',
    label: 'States & the FCT served',
    icon: MapPinned,
  },
  {
    value: 9,
    suffix: '',
    label: 'Departments in the Ministry',
    icon: Building2,
  },
  {
    value: 12,
    suffix: '',
    label: 'Parastatals & agencies',
    icon: Activity,
  },
];

function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [shouldStart, target, duration]);

  return count;
}

function StatsCounters() {
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
        threshold: 0.25,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`stats ${isVisible ? 'stats--visible' : ''}`}
    >
      <div className="stats__grid-pattern" />

      <div className="stats__inner">
        <div className="stats__intro">
          <span className="stats__eyebrow">
            National Scale
          </span>

          <h2 className="stats__heading">
            Connecting
            <span> Nigeria.</span>
          </h2>

          <p className="stats__intro-text">
            A nationwide transportation system built around
            connectivity, coordination and sustainable mobility.
          </p>
        </div>

        <div className="stats__items">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              shouldStart={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, shouldStart }) {
  const count = useCountUp(stat.value, shouldStart);
  const Icon = stat.icon;

  return (
    <div
      className="stats__item"
      style={{ '--stat-index': index }}
    >
      <div className="stats__item-top">
        <span className="stats__number-index">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="stats__icon">
          <Icon size={19} strokeWidth={1.7} />
        </div>
      </div>

      <div className="stats__number">
        {count.toLocaleString()}
        <span>{stat.suffix}</span>
      </div>

      <span className="stats__label">
        {stat.label}
      </span>

      <span className="stats__line" />
    </div>
  );
}

export default StatsCounters;