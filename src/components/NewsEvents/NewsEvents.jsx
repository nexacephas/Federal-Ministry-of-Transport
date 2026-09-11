import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Newspaper,
  Camera,
  Clock3,
} from 'lucide-react';

import './NewsEvents.css';

const NEWS_ITEMS = [
  {
    date: '24 August 2026',
    category: 'Event',
    title:
      'Ministry confirms schedule for the 19th National Council on Transportation',
    description:
      'The Ministry announces preparations and key engagements ahead of the National Council on Transportation.',
    icon: CalendarDays,
    featured: true,
  },
  {
    date: '27 November 2025',
    category: 'Press Release',
    title:
      'Press briefing on rail corridor rehabilitation progress',
    description:
      'Latest updates on ongoing rail corridor rehabilitation and infrastructure development.',
    icon: Newspaper,
  },
  {
    date: '5 November 2025',
    category: 'Press Release',
    title:
      'Minister inaugurates road safety working group',
    description:
      'A new working group has been inaugurated to strengthen road transportation safety.',
    icon: Newspaper,
  },
  {
    date: '14 October 2025',
    category: 'Photo News',
    title:
      "Highlights from the Minister's working visit to Lagos port terminal",
    description:
      'Highlights from an official working visit focused on port operations and maritime logistics.',
    icon: Camera,
  },
  {
    date: '14 June 2025',
    category: 'Press Release',
    title:
      'Ministry outlines updates on rail e-ticketing rollout',
    description:
      'New developments in the rollout of digital rail ticketing services.',
    icon: Newspaper,
  },
];

function NewsEvents() {
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

  const featuredNews = NEWS_ITEMS[0];
  const secondaryNews = NEWS_ITEMS.slice(1, 3);
  const remainingNews = NEWS_ITEMS.slice(3);

  const FeaturedIcon = featuredNews.icon;

  return (
    <section
      ref={sectionRef}
      className={`news ${isVisible ? 'news--visible' : ''}`}
      id="news"
    >
      <div className="news__inner">
        <div className="news__header">
          <div className="news__heading-group">
            <span className="news__eyebrow">
              <span className="news__eyebrow-line" />
              Newsroom
            </span>

            <h2 className="news__heading">
              Updates from the
              <span> Ministry.</span>
            </h2>

            <p className="news__intro">
              Official announcements, events and updates from the
              Federal Ministry of Transportation.
            </p>
          </div>

          <div className="news__header-side">
            <span className="news__edition">
              Ministry Updates
            </span>

            <a href="#news" className="news__see-all">
              <span>View all news</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="news__featured-layout">
          <a
            href="#news"
            className="news__featured"
            style={{ '--news-index': 0 }}
          >
            <div className="news__featured-background">
              <div className="news__featured-grid" />
              <div className="news__featured-orb news__featured-orb--one" />
              <div className="news__featured-orb news__featured-orb--two" />

              <div className="news__featured-symbol">
                <FeaturedIcon
                  size={76}
                  strokeWidth={0.9}
                />
              </div>
            </div>

            <div className="news__featured-content">
              <div className="news__featured-top">
                <span className="news__featured-label">
                  Featured update
                </span>

                <span className="news__featured-number">
                  01
                </span>
              </div>

              <div className="news__featured-body">
                <div className="news__featured-meta">
                  <span>{featuredNews.category}</span>
                  <span className="news__meta-dot" />
                  <span>{featuredNews.date}</span>
                </div>

                <h3>{featuredNews.title}</h3>

                <p>{featuredNews.description}</p>

                <span className="news__featured-action">
                  Read announcement
                  <span>
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </span>
              </div>
            </div>
          </a>

          <div className="news__secondary">
            {secondaryNews.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  href="#news"
                  className="news__secondary-card"
                  key={item.title}
                  style={{
                    '--news-index': index + 1,
                  }}
                >
                  <div className="news__secondary-top">
                    <span className="news__secondary-number">
                      {String(index + 2).padStart(2, '0')}
                    </span>

                    <span className="news__secondary-icon">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <div className="news__secondary-content">
                    <div className="news__secondary-meta">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  <span className="news__secondary-arrow">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="news__bottom-grid">
          {remainingNews.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                href="#news"
                className="news__compact-card"
                key={item.title}
                style={{
                  '--news-index': index + 3,
                }}
              >
                <div className="news__compact-top">
                  <span className="news__compact-number">
                    {String(index + 4).padStart(2, '0')}
                  </span>

                  <span className="news__compact-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                    />
                  </span>
                </div>

                <div className="news__compact-content">
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <div className="news__compact-date">
                    <Clock3
                      size={13}
                      strokeWidth={1.8}
                    />
                    {item.date}
                  </div>
                </div>

                <ChevronRight
                  className="news__compact-arrow"
                  size={18}
                  strokeWidth={1.8}
                />
              </a>
            );
          })}

          <a href="#news" className="news__archive-card">
            <span className="news__archive-number">
              05
            </span>

            <div>
              <span>Archive</span>
              <h3>Explore the newsroom</h3>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.7}
            />
          </a>
        </div>

        <div className="news__footer">
          <span>Official Ministry updates</span>
          <span className="news__footer-line" />
          <span>Federal Ministry of Transportation</span>
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;