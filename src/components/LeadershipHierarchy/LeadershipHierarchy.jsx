import {
  ArrowDown,
  Building2,
  ChevronDown,
  House,
  Landmark,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './LeadershipHierarchy.css';
import heroImage from '../../assets/hero-transport.jpg';

const DIRECTORATES = [
  {
    code: 'PPR',
    name: 'Press & Public Relations',
    description:
      'Public information, media relations and strategic communication.',
  },
  {
    code: 'F&A',
    name: 'Finance & Accounts',
    description:
      'Financial management, budgeting and accounting operations.',
  },
  {
    code: 'RTS',
    name: 'Rail Transport Services',
    description:
      'Policy and coordination relating to Nigeria’s rail transport system.',
  },
  {
    code: 'HRM',
    name: 'Human Resources Management',
    description:
      'Workforce administration, development and personnel management.',
  },
  {
    code: 'RCSI',
    name: 'Reform Coordination & Service Improvement',
    description:
      'Institutional reform, performance and service improvement initiatives.',
  },
  {
    code: 'TPC',
    name: 'Transport Planning & Coordination',
    description:
      'Transport policy, planning and coordination across transport modes.',
  },
  {
    code: 'SD',
    name: 'Special Duties',
    description:
      'Special assignments and strategic responsibilities of the Ministry.',
  },
  {
    code: 'RT&MTA',
    name: 'Road Transport & Mass Transit Administration',
    description:
      'Road transport policy, administration and mass transit coordination.',
  },
  {
    code: 'ENG',
    name: 'Engineering Services',
    description:
      'Engineering coordination, technical standards and infrastructure support.',
  },
];

function LeadershipHierarchy() {
  return (
    <section className="leadership-hierarchy" id="structure">

      {/* =====================================================
          PREMIUM PAGE HERO
          ===================================================== */}

      <div
        className="leadership-hierarchy__hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="leadership-hierarchy__hero-image" />
        <div className="leadership-hierarchy__hero-overlay" />
        <div className="leadership-hierarchy__hero-grid" />

        <div className="leadership-hierarchy__hero-inner">

          <div className="leadership-hierarchy__hero-top">
            <Link
              to="/"
              className="leadership-hierarchy__back-link"
              aria-label="Return to Ministry home page"
              title="Return to Ministry home page"
            >
              <span className="leadership-hierarchy__back-icon">
                <House size={16} strokeWidth={1.8} />
              </span>

              <span>Back to Ministry portal</span>
            </Link>

            <div className="leadership-hierarchy__hero-status">
              <span className="leadership-hierarchy__status-dot" />
              <span>Official Ministry Portal</span>
            </div>
          </div>

          <div className="leadership-hierarchy__hero-content">

            <div className="leadership-hierarchy__hero-kicker">
              <span className="leadership-hierarchy__hero-kicker-line" />
              <span>Leadership &amp; Governance</span>
            </div>

            <h1>
              Leading a connected
              <span> transport system.</span>
            </h1>

            <p>
              Meet the leadership and organisational structure supporting
              Nigeria’s transportation system through coordinated policy,
              administration and service delivery.
            </p>

            <div className="leadership-hierarchy__hero-actions">
              <a
                href="#structure-overview"
                className="leadership-hierarchy__hero-button"
              >
                Explore structure
                <ArrowDown size={16} strokeWidth={1.8} />
              </a>

              <div className="leadership-hierarchy__hero-meta">
                <ShieldCheck size={17} strokeWidth={1.6} />

                <div>
                  <strong>Institutional structure</strong>
                  <span>Ministry of Transportation</span>
                </div>
              </div>
            </div>

          </div>

          <div className="leadership-hierarchy__hero-footer">

            <div className="leadership-hierarchy__hero-footer-item">
              <span>01</span>
              <strong>Leadership</strong>
            </div>

            <div className="leadership-hierarchy__hero-footer-divider" />

            <div className="leadership-hierarchy__hero-footer-item">
              <span>02</span>
              <strong>Directorates</strong>
            </div>

            <div className="leadership-hierarchy__hero-footer-divider" />

            <div className="leadership-hierarchy__hero-footer-item">
              <span>03</span>
              <strong>Coordination</strong>
            </div>

            <div className="leadership-hierarchy__hero-scroll">
              <span>Scroll to explore</span>
              <ArrowDown size={14} strokeWidth={1.6} />
            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          STRUCTURE CONTENT
          ===================================================== */}

      <div
        className="leadership-hierarchy__inner"
        id="structure-overview"
      >

        <div className="leadership-hierarchy__header">

          <div className="leadership-hierarchy__eyebrow">
            <span className="leadership-hierarchy__eyebrow-icon">
              <Network size={15} strokeWidth={1.8} />
            </span>

            Organisational Structure
          </div>

          <h2 className="leadership-hierarchy__heading">
            Leadership &amp; organisational structure
          </h2>

          <p className="leadership-hierarchy__intro">
            An overview of the leadership and directorate structure
            supporting the Ministry’s mandate to coordinate and advance
            Nigeria’s transportation system.
          </p>

        </div>

        <div className="leadership-hierarchy__diagram">

          {/* TOP LEADERSHIP */}

          <div className="leadership-hierarchy__top">

            <div className="leadership-hierarchy__leader-card">

              <div className="leadership-hierarchy__leader-icon">
                <Landmark size={24} strokeWidth={1.7} />
              </div>

              <div className="leadership-hierarchy__leader-content">

                <span className="leadership-hierarchy__level">
                  Ministry Leadership
                </span>

                <h3>Permanent Secretary</h3>

                <p>
                  Administrative and institutional leadership of the Ministry.
                </p>

              </div>

              <span className="leadership-hierarchy__leader-status">
                Leadership
              </span>

            </div>

          </div>

          {/* CONNECTOR */}

          <div className="leadership-hierarchy__connector">
            <span className="leadership-hierarchy__connector-arrow">
              <ArrowDown size={17} strokeWidth={1.7} />
            </span>
          </div>

          {/* DIRECTORATES */}

          <div className="leadership-hierarchy__directorates">

            <div className="leadership-hierarchy__section-label">
              <span className="leadership-hierarchy__section-line" />
              <span>Directorates &amp; Units</span>
              <span className="leadership-hierarchy__section-line" />
            </div>

            <div className="leadership-hierarchy__grid">

              {DIRECTORATES.map((directorate, index) => (

                <article
                  className="leadership-hierarchy__node"
                  key={directorate.code}
                  style={{ '--node-index': index }}
                >

                  <div className="leadership-hierarchy__node-top">

                    <span className="leadership-hierarchy__node-code">
                      {directorate.code}
                    </span>

                    <span className="leadership-hierarchy__node-icon">
                      <Building2 size={17} strokeWidth={1.7} />
                    </span>

                  </div>

                  <h3>{directorate.name}</h3>

                  <p>{directorate.description}</p>

                  <div className="leadership-hierarchy__node-footer">
                    <span>Directorate</span>

                    <ChevronDown
                      size={15}
                      strokeWidth={1.7}
                    />
                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

        <div className="leadership-hierarchy__note">

          <span className="leadership-hierarchy__note-dot" />

          <p>
            <strong>Institutional overview.</strong> This structure is
            presented as a website design representation and may be updated
            to reflect the Ministry’s official organogram when available.
          </p>

        </div>

      </div>

    </section>
  );
}

export default LeadershipHierarchy;