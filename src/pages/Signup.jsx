
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();

    if (!name || !email || !form.password) {
      setMessage("Please complete all fields.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Your password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post("/auth/signup", {
        name,
        email,
        password: form.password,
      });

      if (!data.token) {
        throw new Error("Account created, but no authentication token was returned.");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name || name);

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
        err.message ||
        "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-page">
      {/* Left branding section */}
      <section className="signup-visual">
        <Link to="/" className="signup-logo">
          <span className="signup-logo-icon">✚</span>
          <span>Health Buddy</span>
        </Link>

        <div className="signup-visual-content">
          <span className="signup-tag">YOUR HEALTH, YOUR PRIORITY</span>

          <h1>
            A healthier life
            <br />
            starts with <span>one step.</span>
          </h1>

          <p>
            Create your Health Buddy account and take a smarter,
            more informed approach to your health and wellbeing.
          </p>

          <div className="signup-illustration">
            <div className="signup-circle">
              <span>✚</span>
            </div>

            <div className="signup-floating-card card-one">
              <span className="floating-icon">♡</span>
              <div>
                <strong>Your health matters</strong>
                <small>We're here to help</small>
              </div>
            </div>

            <div className="signup-floating-card card-two">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Smart health guidance</strong>
                <small>Support when you need it</small>
              </div>
            </div>
          </div>
        </div>

        <p className="signup-visual-footer">
          Health Buddy AI · Your personal health companion
        </p>
      </section>

      {/* Right signup section */}
      <section className="signup-form-section">
        <div className="signup-form-container">
          <div className="signup-mobile-logo">
            <span>✚</span> Health Buddy
          </div>

          <div className="signup-heading">
            <span className="signup-welcome">GET STARTED</span>
            <h2>Create your account</h2>
            <p>
              Join Health Buddy and take control of your health journey.
            </p>
          </div>

          {message && (
            <div className="signup-error" role="alert">
              <span>!</span>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="password">Password</label>

              <div className="signup-password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={6}
                  required
                />

                <button
                  type="button"
                  className="signup-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <small className="signup-hint">
                Use at least 6 characters.
              </small>
            </div>

            <button
              type="submit"
              className="signup-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="signup-spinner"></span>
                  Creating account...
                </>
              ) : (
                <>
                  Create account <span>→</span>
                </>
              )}
            </button>
          </form>

          <div className="signup-divider">
            <span>ALREADY A MEMBER?</span>
          </div>

          <p className="signup-login-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>

          <p className="signup-terms">
            By creating an account, you agree to use Health Buddy
            as a health information support tool, not as a replacement
            for professional medical advice.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signup;
