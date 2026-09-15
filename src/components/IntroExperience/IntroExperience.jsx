import { useEffect, useState } from 'react';
import './IntroExperience.css';
import coatOfArms from '../../assets/coat-of-arms.png';

const INTRO_DURATION = 5200;
const EXIT_DURATION = 900;
const SESSION_KEY = 'fmot-intro-seen';

function IntroExperience() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip the intro if it has already been shown during this session.
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setIsVisible(false);
      return undefined;
    }

    const start = performance.now();
    let animationFrame;

    const updateProgress = (time) => {
      const elapsed = time - start;
      const nextProgress = Math.min(elapsed / INTRO_DURATION, 1);

      setProgress(nextProgress);

      if (nextProgress < 1 && !isExiting) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, INTRO_DURATION);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
    };
  }, [isExiting]);

  useEffect(() => {
    if (!isExiting) return undefined;

    sessionStorage.setItem(SESSION_KEY, 'true');

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

  const progressValue = Math.round(progress * 100);

  return (
    <div
      className={`intro-experience ${
        isExiting ? 'intro-experience--exiting' : ''
      }`}
      role="dialog"
      aria-label="Federal Ministry of Transportation introduction"
      aria-modal="true"
    >
      <div className="intro-experience__background">
        <div className="intro-experience__glow intro-experience__glow--one" />
        <div className="intro-experience__glow intro-experience__glow--two" />
        <div className="intro-experience__glow intro-experience__glow--three" />

        <div className="intro-experience__grid" aria-hidden="true" />

        <div className="intro-experience__routes" aria-hidden="true">
          <span className="route route--one" />
          <span className="route route--two" />
          <span className="route route--three" />
          <span className="route route--four" />
        </div>

        <div className="intro-experience__noise" />
      </div>

      <div className="intro-experience__topbar">
        <div className="intro-experience__topbar-left">
          <span className="topbar-dot" />
          <span>Official Digital Portal</span>
        </div>

        <span className="intro-experience__topbar-right">
          Federal Republic of Nigeria
        </span>
      </div>

      <main className="intro-experience__content">
        <div className="intro-experience__crest-area">
          <div className="intro-experience__crest-orbit">
            <span className="orbit-line orbit-line--one" />
            <span className="orbit-line orbit-line--two" />
            <span className="orbit-dot orbit-dot--one" />
            <span className="orbit-dot orbit-dot--two" />
          </div>

          <div className="intro-experience__crest-wrap">
            <div className="intro-experience__crest-glow" />

            <img
              src={coatOfArms}
              alt="Coat of Arms of Nigeria"
              className="intro-experience__crest"
            />
          </div>
        </div>

        <div className="intro-experience__identity">
          <span className="intro-experience__country">
            Federal Republic of Nigeria
          </span>

          <h1 className="intro-experience__ministry">
            Ministry of Transportation
          </h1>
        </div>

        <div className="intro-experience__divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="intro-experience__statement">
          Connecting people.
          <br />
          Moving goods.
          <br />
          <strong>Advancing Nigeria.</strong>
        </p>

        <div className="intro-experience__actions">
          <button
            type="button"
            className="intro-experience__enter"
            onClick={enterPortal}
          >
            <span className="intro-experience__enter-label">
              Enter Ministry Portal
            </span>

            <span className="intro-experience__enter-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </main>

      <div className="intro-experience__footer">
        <div className="intro-experience__footer-meta">
          <span>TRANSPORTATION</span>
          <span className="footer-separator">/</span>
          <span>DIGITAL EXPERIENCE</span>
        </div>

        <div className="intro-experience__progress">
          <span className="progress-label">
            {progressValue.toString().padStart(2, '0')}
          </span>

          <div className="progress-track">
            <span
              className="progress-bar"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        <button
          type="button"
          className="intro-experience__skip"
          onClick={enterPortal}
        >
          Skip intro
        </button>
      </div>

      <div className="intro-experience__edge-mark intro-experience__edge-mark--left">
        <span />
        <span />
      </div>

      <div className="intro-experience__edge-mark intro-experience__edge-mark--right">
        <span />
        <span />
      </div>
    </div>
  );
}

export default IntroExperience;