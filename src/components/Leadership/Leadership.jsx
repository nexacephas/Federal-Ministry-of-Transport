import './Leadership.css';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ministerImage from '../../assets/per sec.png';

const LEADERS = [
  {
    name: 'Olufunso Adebiyi',
    role: 'Permanent Secretary',
    image: ministerImage,
  },
];

function Leadership() {
  return (
    <section className="leadership" id="about">
      <div className="leadership__inner">

        <div className="leadership__header">
          <div className="leadership__heading-group">
            <span className="leadership__eyebrow">
              Ministry Leadership
            </span>

            <h2 className="leadership__heading">
              Leadership with a mandate for
              <span> national transportation.</span>
            </h2>
          </div>

          <div className="leadership__header-side">
            <p className="leadership__intro">
              The Ministry is supported by experienced public servants
              committed to strengthening Nigeria's transportation systems,
              infrastructure and institutional coordination.
            </p>

            <Link
              to="/leadership-hierarchy"
              className="leadership__hierarchy-link"
            >
              <span>View leadership hierarchy</span>

              <span className="leadership__link-icon">
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>

        <div className="leadership__rule" aria-hidden="true">
          <span />
          <span>01</span>
          <span />
        </div>

        <div className="leadership__grid">
          {LEADERS.map((leader) => (
            <article
              className="leadership__card"
              key={leader.name}
            >
              <div className="leadership__visual">

                <div className="leadership__visual-top">
                  <span>Leadership Profile</span>
                  <span>01 / 01</span>
                </div>

                <div className="leadership__photo-wrap">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leadership__photo"
                    loading="lazy"
                  />

                  <div className="leadership__photo-overlay" />
                </div>

                <div className="leadership__visual-bottom">
                  <span>Federal Republic of Nigeria</span>
                  <span>Ministry of Transportation</span>
                </div>

                <div
                  className="leadership__corner leadership__corner--top"
                  aria-hidden="true"
                />

                <div
                  className="leadership__corner leadership__corner--bottom"
                  aria-hidden="true"
                />
              </div>

              <div className="leadership__info">

                <div className="leadership__info-top">
                  <span className="leadership__label">
                    Office of the Permanent Secretary
                  </span>

                  <span className="leadership__index">
                    01
                  </span>
                </div>

                <div className="leadership__profile">
                  <h3 className="leadership__name">
                    {leader.name}
                  </h3>

                  <p className="leadership__role">
                    {leader.role}
                  </p>
                </div>

                <div className="leadership__info-bottom">
                  <div className="leadership__description">
                    <span className="leadership__description-line" />

                    <p>
                      Providing institutional leadership and administrative
                      coordination in support of Nigeria's transportation
                      development.
                    </p>
                  </div>

                  <Link
                    to="/leadership-hierarchy"
                    className="leadership__profile-link"
                    aria-label={`View ${leader.name}'s leadership hierarchy`}
                  >
                    <span>Explore</span>

                    <span>
                      <ArrowDownRight
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>
                  </Link>
                </div>

                <div className="leadership__watermark" aria-hidden="true">
                  MOT
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Leadership;