import "react";
import "../index.css";

function AboutUs() {
  return (
    <div className="hb-page">
      <div className="hb-header">
        <div>
          <h1>About Healthy Buddy</h1>
          <p>Your trusted companion for smarter health guidance.</p>
        </div>
        <div className="hb-header-icon">💚</div>
      </div>

      <section className="hb-welcome">
        <div>
          <span className="hb-tag">YOUR HEALTH, OUR PRIORITY</span>
          <h2>Your Health Matters.</h2>
          <p>
            Healthy Buddy is an intelligent health assistance
            platform designed to help people understand their
            health concerns and make informed decisions.
          </p>
        </div>
        <div className="hb-big-icon">🩺</div>
      </section>

      <div className="hb-card-grid">
        <div className="hb-card">
          <div className="hb-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To make basic health information and preliminary
            health guidance more accessible through technology.
          </p>
        </div>

        <div className="hb-card">
          <div className="hb-icon">🌍</div>
          <h3>Our Vision</h3>
          <p>
            To contribute to a world where everyone can access
            reliable health information and guidance when needed.
          </p>
        </div>

        <div className="hb-card">
          <div className="hb-icon">🤝</div>
          <h3>Our Values</h3>
          <p>
            We value accessibility, privacy, reliability,
            responsibility and user safety.
          </p>
        </div>
      </div>

      <section className="hb-section">
        <h2>What Healthy Buddy Offers</h2>
        <p className="hb-subtitle">
          Features designed to support your health journey.
        </p>

        <div className="hb-feature-list">
          <div className="hb-feature">
            <span>💬</span>
            <div>
              <h4>AI Health Assistance</h4>
              <p>
                Interact with an intelligent assistant to
                describe symptoms and receive preliminary guidance.
              </p>
            </div>
          </div>

          <div className="hb-feature">
            <span>🚨</span>
            <div>
              <h4>Emergency Risk Screening</h4>
              <p>
                Identify potentially serious health situations
                that may require urgent medical attention.
              </p>
            </div>
          </div>

          <div className="hb-feature">
            <span>🩹</span>
            <div>
              <h4>First Aid Guidance</h4>
              <p>
                Access approved first-aid information for
                common health incidents.
              </p>
            </div>
          </div>

          <div className="hb-feature">
            <span>🏥</span>
            <div>
              <h4>Hospital Recommendations</h4>
              <p>
                Receive guidance on seeking appropriate
                healthcare services when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hb-disclaimer">
        <h3>⚠️ Important Health Notice</h3>
        <p>
          Healthy Buddy provides preliminary health information
          and guidance. It is not a replacement for professional
          medical diagnosis, treatment or emergency services.
          Always consult a qualified healthcare professional
          when necessary.
        </p>
      </section>

      <footer className="hb-footer">
        <h3>Healthy Buddy 💚</h3>
        <p>Supporting healthier decisions, one step at a time.</p>
        <small>© 2026 Healthy Buddy. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default AboutUs;