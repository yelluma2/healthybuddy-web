
import { useNavigate, Link } from "react-router-dom";


function Portal() {
  const navigate = useNavigate();

  const handleSelection = (patientType) => {
    navigate("/dashboard", {
      state: {
        patientType,
      },
    });
  };

  return (
    <div className="portal-page">

      {/* Header */}
      <header className="portal-header">
        <Link to="/" className="portal-logo">
          <span className="portal-logo-icon">✚</span>
          Health <strong>Buddy</strong>
        </Link>

        <Link to="/" className="portal-home">
          ← Back to home
        </Link>
      </header>

      {/* Main content */}
      <main className="portal-main">

        <div className="portal-badge">
          <span className="portal-status"></span>
          YOUR HEALTH JOURNEY STARTS HERE
        </div>

        <h1>
          Who are you seeking
          <span> health assistance for?</span>
        </h1>

        <p className="portal-description">
          Let's personalize your experience. Choose who needs
          assistance so we can guide you through the right questions.
        </p>

        {/* Selection cards */}
        <div className="portal-options">

          {/* For me */}
          <button
            className="portal-option"
            onClick={() => handleSelection("self")}
            type="button"
          >
            <div className="option-top">
              <div className="option-icon self-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>

              <span className="option-arrow">↗</span>
            </div>

            <div className="option-content">
              <span className="option-label">PERSONAL HEALTH</span>
              <h2>For Me</h2>
              <p>
                I want to understand my symptoms and receive
                personalized first-aid guidance.
              </p>
            </div>

            <div className="option-bottom">
              <span>Continue as myself</span>
              <span>→</span>
            </div>
          </button>

          {/* For someone else */}
          <button
            className="portal-option"
            onClick={() => handleSelection("someone_else")}
            type="button"
          >
            <div className="option-top">
              <div className="option-icon other-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="8" r="3.5" />
                  <path d="M2 21c0-4 3-7 7-7s7 3 7 7" />
                  <path d="M16 5.5a3.5 3.5 0 0 1 0 7" />
                  <path d="M18 14.5c2.4 1 4 3.3 4 6.5" />
                </svg>
              </div>

              <span className="option-arrow">↗</span>
            </div>

            <div className="option-content">
              <span className="option-label">CARING FOR OTHERS</span>
              <h2>For Someone Else</h2>
              <p>
                I'm seeking health information for a family member,
                friend, child or someone I care about.
              </p>
            </div>

            <div className="option-bottom">
              <span>Continue for another person</span>
              <span>→</span>
            </div>
          </button>

        </div>

        <div className="portal-privacy">
          <span>🔒</span>
          Your health information should always be treated with care and privacy.
        </div>

      </main>

      {/* Footer */}
      <footer className="portal-footer">
        © 2026 Health Buddy. Your health matters.
      </footer>

    </div>
  );
}

export default Portal;
