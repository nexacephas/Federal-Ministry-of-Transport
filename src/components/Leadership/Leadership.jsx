import './Leadership.css';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ministerImage from '../../assets/minister.png';

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
          <span className="leadership__eyebrow">
            Ministry Leadership
          </span>

          <h2 className="leadership__heading">
            Experienced leadership serving Nigeria's transport sector
          </h2>

          <p className="leadership__intro">
            The Ministry is supported by experienced public servants
            committed to strengthening Nigeria's transportation systems,
            infrastructure and institutional coordination.
          </p>

          <Link
            to="/leadership-hierarchy"
            className="leadership__hierarchy-link"
          >
            View leadership hierarchy
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="leadership__grid">
          {LEADERS.map((leader) => (
            <article
              className="leadership__card"
              key={leader.name}
            >
              <div className="leadership__photo-wrap">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leadership__photo"
                  loading="lazy"
                />
              </div>

              <div className="leadership__info">
                <span className="leadership__label">
                  Office of the Permanent Secretary
                </span>

                <h3 className="leadership__name">
                  {leader.name}
                </h3>

                <p className="leadership__role">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;