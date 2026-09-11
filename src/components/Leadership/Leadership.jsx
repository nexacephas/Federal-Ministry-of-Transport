// src/components/Leadership/Leadership.jsx

import './Leadership.css';

const LEADERS = [
  {
    name: 'Said Ahmed Alkali',
    role: 'Honourable Minister of Transportation',
    image:
      'https://transportation.gov.ng/wp-content/uploads/2021/03/New-HMT-1.jpeg',
  },
  {
    name: 'Olufunso Adebiyi',
    role: 'Permanent Secretary',
    image:
      'data:image/jpeg;base64,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',
  },
];

function Leadership() {
  return (
    <section className="leadership" id="about">
      <div className="leadership__inner">

        <div className="leadership__header">
          <span className="leadership__eyebrow">
            Meet the Leadership
          </span>

          <h2 className="leadership__heading">
            Experienced hands guiding Nigeria's transport sector
          </h2>

          <p className="leadership__intro">
            The Ministry is led by experienced public servants committed
            to advancing Nigeria's transportation systems and infrastructure.
          </p>
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