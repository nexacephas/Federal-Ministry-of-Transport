import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Visit us',
    title: 'Ministry Headquarters',
    text: 'Bukar Dipcharima House, Central Business District, FCT, Abuja, Nigeria.',
  },
  {
    icon: Mail,
    label: 'Email us',
    title: 'Official correspondence',
    text: 'info@transportation.gov.ng',
    href: 'mailto:info@transportation.gov.ng',
  },
  {
    icon: Phone,
    label: 'Call the Ministry',
    title: 'General enquiries',
    text: 'Official Ministry contact line',
  },
  {
    icon: Clock3,
    label: 'Office hours',
    title: 'Monday — Friday',
    text: '8:00 AM — 4:00 PM',
  },
];

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__glow contact__glow--one" />
      <div className="contact__glow contact__glow--two" />

      <div className="contact__inner">

        <div className="contact__header">
          <div className="contact__eyebrow">
            <span className="contact__eyebrow-icon">
              <Mail size={15} strokeWidth={1.8} />
            </span>

            Get in touch
          </div>

          <h2 className="contact__heading">
            Connect with the
            <span> Ministry.</span>
          </h2>

          <p className="contact__intro">
            Whether you need information, clarification or assistance,
            our official channels are available to help you connect with
            the Ministry of Transportation.
          </p>

          <div className="contact__identity">
            <span className="contact__identity-mark" />

            <div>
              <strong>Federal Republic of Nigeria</strong>
              <span>Ministry of Transportation</span>
            </div>
          </div>
        </div>

        <div className="contact__content">

          <div className="contact__details">
            {CONTACT_DETAILS.map((item) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="contact__detail-icon">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className="contact__detail-copy">
                    <span className="contact__detail-label">
                      {item.label}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  href={item.href}
                  className="contact__detail"
                  key={item.label}
                >
                  {content}
                </a>
              ) : (
                <div className="contact__detail" key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="contact__form-card">
            <div className="contact__form-header">
              <div>
                <span className="contact__form-eyebrow">
                  Send an enquiry
                </span>

                <h3>How can we help?</h3>
              </div>

              <div className="contact__form-mark">
                <Send size={18} strokeWidth={1.7} />
              </div>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__form-row">
                <label className="contact__field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact__field">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact__field">
                <span>Subject</span>

                <select name="subject" defaultValue="" required>
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  <option value="general">
                    General enquiry
                  </option>
                  <option value="transport">
                    Transportation services
                  </option>
                  <option value="information">
                    Request for information
                  </option>
                  <option value="feedback">
                    Feedback
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </label>

              <label className="contact__field">
                <span>Message</span>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can assist you..."
                  required
                />
              </label>

              <div className="contact__form-bottom">
                <p>
                  Please include enough detail for the Ministry team to
                  understand your enquiry.
                </p>

                <button
                  type="submit"
                  className="contact__submit"
                >
                  <span>Send enquiry</span>
                  <ArrowRight size={17} strokeWidth={1.8} />
                </button>
              </div>

              {isSubmitted && (
                <p className="contact__form-status" role="status">
                  Thank you. Please follow up through the official email
                  address listed above to complete your enquiry.
                </p>
              )}
            </form>
          </div>

        </div>

        <div className="contact__bottom">
          <span>Official Ministry Contact Centre</span>

          <div className="contact__bottom-line" />

          <span>Federal Ministry of Transportation</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;