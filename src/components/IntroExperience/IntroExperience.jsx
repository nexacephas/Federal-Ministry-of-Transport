import { useEffect, useState } from 'react';

import './IntroExperience.css';
import coatOfArms from '../../assets/coat-of-arms.png';

const INTRO_DURATION = 4000;
const EXIT_DURATION = 520;

function IntroExperience() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) return undefined;

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, INTRO_DURATION);

    return () => window.clearTimeout(exitTimer);
  }, [isVisible]);

  useEffect(() => {
    if (!isExiting) return undefined;

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, EXIT_DURATION);

    return () => window.clearTimeout(removeTimer);
  }, [isExiting]);

  const enterPortal = () => {
    if (isExiting) return;
    setIsExiting(true);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`intro-experience ${isExiting ? 'intro-experience--exiting' : ''}`}
      role="dialog"
      aria-label="Federal Ministry of Transportation introduction"
      aria-modal="true"
    >
      <div className="intro-experience__ambient intro-experience__ambient--one" />
      <div className="intro-experience__ambient intro-experience__ambient--two" />
      <div className="intro-experience__grid" aria-hidden="true" />

      <div className="intro-experience__content">
        <div className="intro-experience__crest-wrap">
          <img
            src={coatOfArms}
            alt="Coat of Arms of Nigeria"
            className="intro-experience__crest"
          />
        </div>

        <div className="intro-experience__identity">
          <span className="intro-experience__country">
            Federal Republic of Nigeria
          </span>
          <span className="intro-experience__ministry">
            Ministry of Transportation
          </span>
        </div>

        <div className="intro-experience__line" aria-hidden="true" />

        <p className="intro-experience__statement">
          Connecting people. Moving goods. Advancing Nigeria.
        </p>

        <button
          type="button"
          className="intro-experience__enter"
          onClick={enterPortal}
        >
          <span>Enter Ministry Portal</span>
          <span className="intro-experience__enter-mark" aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        className="intro-experience__skip"
        onClick={enterPortal}
      >
        Skip intro
      </button>
    </div>
  );
}

export default IntroExperience;
