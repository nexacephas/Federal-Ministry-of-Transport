// src/components/Hero/Hero.jsx

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Search,
  X,
} from 'lucide-react';

import './Hero.css';
import heroImage from '../../assets/hero-transport.jpg';

const SEARCH_DATA = [
  {
    title: 'E-Services',
    category: 'Service',
    description:
      'Access transportation services and digital platforms.',
    href: '#services',
  },
  {
    title: 'Transport Planning',
    category: 'Department',
    description:
      'Planning and coordination of national transportation systems.',
    href: '#departments',
  },
  {
    title: 'Rail Transportation',
    category: 'Service',
    description:
      'Information and services relating to rail transportation.',
    href: '#services',
  },
  {
    title: 'Maritime Transportation',
    category: 'Service',
    description:
      'Maritime policies, regulation and transportation services.',
    href: '#services',
  },
  {
    title: 'Road Transportation',
    category: 'Service',
    description:
      'Policies and programmes relating to road transportation.',
    href: '#services',
  },
  {
    title: 'News & Events',
    category: 'News',
    description:
      'Latest updates, announcements and ministry events.',
    href: '#news',
  },
  {
    title: 'Ministry Departments',
    category: 'Department',
    description:
      'Explore departments and their responsibilities.',
    href: '#departments',
  },
];

const HERO_DETAILS = [
  {
    value: '36 States + FCT',
    label: 'National coverage',
    icon: Globe2,
  },
  {
    value: 'Rail · Road · Maritime',
    label: 'Integrated transport',
    icon: Building2,
  },
  {
    value: 'Official Ministry Portal',
    label: 'Federal Republic of Nigeria',
    icon: CheckCircle2,
  },
];

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeResultIndex, setActiveResultIndex] = useState(0);

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

  const showResults =
    isSearchFocused || searchQuery.trim().length > 0;

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (filteredResults.length > 0) {
      window.location.hash =
        filteredResults[activeResultIndex]?.href.replace('#', '') ||
        filteredResults[0].href.replace('#', '');
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsSearchFocused(false);
      event.currentTarget.blur();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveResultIndex((index) => (
        Math.min(index + 1, filteredResults.length - 1)
      ));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveResultIndex((index) => Math.max(index - 1, 0));
    }
  };

  const handleSearchResultClick = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-labelledby="hero-heading"
    >
      <div className="hero__overlay" />

      <div className="hero__image-shade" />

      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="hero__glow hero__glow--three" />

      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__identity">
            <span className="hero__identity-line" />

            <span className="hero__eyebrow">
              Federal Ministry of Transportation
            </span>

            <span className="hero__identity-status">
              Official
            </span>
          </div>

          <h1
            id="hero-heading"
            className="hero__heading"
          >
            Moving Nigeria
            <span>forward.</span>
          </h1>

          <p className="hero__heading-accent">
            By rail, by road, and by sea.
          </p>

          <p className="hero__subtext">
            We plan, regulate and modernize the nation's
            transportation infrastructure, connecting people,
            goods and markets across all 36 states and the FCT.
          </p>

          <div className="hero__actions">
            <a
              href="#services"
              className="hero__cta hero__cta--primary"
            >
              <span>Explore E-Services</span>
              <ArrowRight
                size={17}
                strokeWidth={2}
              />
            </a>

            <a
              href="#news"
              className="hero__cta hero__cta--secondary"
            >
              Latest News
            </a>
          </div>

          <div
            className={`hero__search-wrapper ${
              isSearchFocused
                ? 'hero__search-wrapper--active'
                : ''
            }`}
          >
            <form
              className="hero__search"
              onSubmit={handleSearchSubmit}
              role="search"
            >
              <Search
                className="hero__search-icon"
                size={20}
                strokeWidth={1.8}
              />

              <div className="hero__search-input-wrap">
                <span className="hero__search-label">
                  Ministry search
                </span>

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setActiveResultIndex(0);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  onFocus={() =>
                    setIsSearchFocused(true)
                  }
                  onBlur={() =>
                    setTimeout(
                      () =>
                        setIsSearchFocused(false),
                      160
                    )
                  }
                  placeholder="Search services, news, departments..."
                  aria-label="Search the Federal Ministry of Transportation"
                  aria-autocomplete="list"
                  aria-controls="ministry-search-results"
                  aria-activedescendant={
                    filteredResults[activeResultIndex]
                      ? `search-result-${activeResultIndex}`
                      : undefined
                  }
                  aria-expanded={showResults}
                  role="combobox"
                  autoComplete="off"
                />
              </div>

              {searchQuery && (
                <button
                  type="button"
                  className="hero__search-clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}

              <button
                type="submit"
                className="hero__search-button"
                aria-label="Search"
              >
                <span>Search</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                />
              </button>
            </form>

            {showResults && (
              <div
                id="ministry-search-results"
                className="hero__search-results"
                role="listbox"
                aria-label="Ministry search results"
              >
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
                          id={`search-result-${filteredResults.indexOf(item)}`}
                          href={item.href}
                          className="hero__search-result"
                          role="option"
                          aria-selected={
                            filteredResults.indexOf(item) === activeResultIndex
                          }
                          onClick={
                            handleSearchResultClick
                          }
                        >
                          <div className="hero__search-result-icon">
                            <Search
                              size={15}
                              strokeWidth={2}
                            />
                          </div>

                          <div className="hero__search-result-content">
                            <div className="hero__search-result-title">
                              <span className="hero__search-result-name">
                                {item.title}
                              </span>

                              <span className="hero__search-result-category">
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
                            strokeWidth={1.8}
                          />
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="hero__search-empty">
                    <div className="hero__search-empty-icon">
                      <Search
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                    <strong>No results found</strong>

                    <p>
                      Try searching for a service,
                      department or news topic.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hero__details">
          {HERO_DETAILS.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                className="hero__detail"
                key={detail.value}
              >
                <div className="hero__detail-icon">
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="hero__detail-content">
                  <strong>{detail.value}</strong>
                  <span>{detail.label}</span>
                </div>
              </div>
            );
          })}
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