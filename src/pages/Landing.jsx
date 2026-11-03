import { Link } from "react-router-dom";


function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <span className="landing-logo">Health Buddy</span>
        <nav>
          <Link to="/login" className="nav-link">Log in</Link>
          <Link to="/signup" className="nav-btn">Sign up</Link>
        </nav>
      </header>

      <section className="landing-hero">
        <h1>Your first-aid health assistant</h1>
        <p>
          Tell Health Buddy your symptoms and get likely causes and simple
          first-aid advice before you go to the hospital.
        </p>
        <Link to="/portal" className="hero-btn">
  Get Diagnosed →
</Link>
      </section>

      <section className="landing-features">
        <div className="feature">
          <h3>Describe symptoms</h3>
          <p>Enter what you or someone you care for is feeling.</p>
        </div>
        <div className="feature">
          <h3>Get guidance</h3>
          <p>See possible conditions and first-aid steps you can take now.</p>
        </div>
        <div className="feature">
          <h3>Emergency alerts</h3>
          <p>If symptoms look serious, we tell you to contact a doctor.</p>
        </div>
      </section>

      <footer className="landing-footer">
        Health Buddy gives general guidance only and is not a replacement for
        a doctor. In an emergency, contact a medical professional immediately.
      </footer>
    </div>
  );
}

export default Landing;