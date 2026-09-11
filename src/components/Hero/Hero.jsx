// src/components/Hero/Hero.jsx

import { useMemo, useState } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';

import './Hero.css';

import heroImage from '../../assets/hero-transport.jpg';

const SEARCH_DATA = [
  {
    title: 'E-Services',
    category: 'Service',
    description: 'Access transportation services and digital platforms.',
    href: '#services',
  },
  {
    title: 'Transport Planning',
    category: 'Department',
    description: 'Planning and coordination of national transportation systems.',
    href: '#departments',
  },
  {
    title: 'Rail Transportation',
    category: 'Service',
    description: 'Information and services relating to rail transportation.',
    href: '#services',
  },
  {
    title: 'Maritime Transportation',
    category: 'Service',
    description: 'Maritime policies, regulation and transportation services.',
    href: '#services',
  },
  {
    title: 'Road Transportation',
    category: 'Service',
    description: 'Policies and programmes relating to road transportation.',
    href: '#services',
  },
  {
    title: 'News & Events',
    category: 'News',
    description: 'Latest updates, announcements and ministry events.',
    href: '#news',
  },
  {
    title: 'Ministry Departments',
    category: 'Department',
    description: 'Explore departments and their responsibilities.',
    href: '#departments',
  },
  {
    title: 'Publications',
    category: 'Resource',
    description: 'Reports, policies, documents and official publications.',
    href: '#publications',
  },
];

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return SEARCH_DATA.slice(0, 5);
    }

    return SEARCH_DATA.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }).slice(0, 6);
  }, [searchQuery]);

  const showResults = isSearchFocused || searchQuery.trim().length > 0;

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (filteredResults.length > 0) {
      window.location.hash = filteredResults[0].href.replace('#', '');
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero__overlay" />

      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__inner">

        <div className="hero__content">

          <span className="hero__eyebrow">
            Federal Ministry of Transportation
          </span>

          <h1 className="hero__heading">
            Moving Nigeria forward — by rail, by road, and by sea.
          </h1>

          <p className="hero__subtext">
            We plan, regulate and modernize the nation's transport
            infrastructure, connecting people, goods and markets across
            all 36 states and the FCT.
          </p>

          <div className="hero__actions">

            <a
              href="#services"
              className="hero__cta hero__cta--primary"
            >
              Explore E-Services
              <ArrowRight size={17} strokeWidth={2} />
            </a>

            <a
              href="#news"
              className="hero__cta hero__cta--secondary"
            >
              Latest News
            </a>

          </div>

          {/* Live Search */}
          <div
            className={`hero__search-wrapper ${
              isSearchFocused ? 'hero__search-wrapper--active' : ''
            }`}
          >
            <form
              className="hero__search"
              onSubmit={handleSearchSubmit}
            >
              <Search
                className="hero__search-icon"
                size={20}
                strokeWidth={2}
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() =>
                  setTimeout(() => setIsSearchFocused(false), 150)
                }
                placeholder="Search services, news, departments..."
                aria-label="Search the Federal Ministry of Transportation"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="hero__search-clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}

              <button
                type="submit"
                className="hero__search-button"
                aria-label="Search"
              >
                Search
              </button>
            </form>

            {showResults && (
              <div className="hero__search-results">

                {filteredResults.length > 0 ? (
                  <>
                    <div className="hero__search-results-header">
                      <span>
                        {searchQuery
                          ? 'Search results'
                          : 'Popular destinations'}
                      </span>

                      <span className="hero__search-count">
                        {filteredResults.length}
                      </span>
                    </div>

                    <div className="hero__search-list">

                      {filteredResults.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="hero__search-result"
                        >
                          <div className="hero__search-result-icon">
                            <Search
                              size={15}
                              strokeWidth={2}
                            />
                          </div>

                          <div className="hero__search-result-content">
                            <div className="hero__search-result-title">
                              {item.title}

                              <span>
                                {item.category}
                              </span>
                            </div>

                            <p>
                              {item.description}
                            </p>
                          </div>

                          <ArrowRight
                            className="hero__search-result-arrow"
                            size={16}
                          />
                        </a>
                      ))}

                    </div>
                  </>
                ) : (
                  <div className="hero__search-empty">
                    <div className="hero__search-empty-icon">
                      <Search size={18} />
                    </div>

                    <strong>No results found</strong>

                    <p>
                      Try searching for a service, department or
                      news topic.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          <span>Scroll to explore</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;