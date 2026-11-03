
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.email.trim() || !form.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", {
        email: form.email.trim(),
        password: form.password,
      });

      // Clear previous authentication storage
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("name");

      // Save credentials according to remember-me preference
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("token", data.token);
      storage.setItem("name", data.name || "");

      navigate("/dashboard", { replace: true });

    } catch (err) {
      setMessage(
        err.response?.data?.message ||
        "Unable to log in. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE - BRANDING */}
      <section className="login-showcase">

        <Link to="/" className="login-brand">
          <span className="login-brand-icon">✚</span>
          <span>Health <strong>Buddy</strong></span>
        </Link>

        <div className="showcase-content">
          <span className="showcase-label">
            YOUR PERSONAL HEALTH COMPANION
          </span>

          <h1>
            Your health journey
            <span> deserves better care.</span>
          </h1>

          <p>
            Understand your symptoms, access helpful first-aid
            information, and make more informed decisions about
            your health.
          </p>

          <div className="showcase-visual">
            <div className="showcase-circle">
              <div className="showcase-cross">✚</div>
              <div className="showcase-pulse"></div>
            </div>

            <div className="showcase-floating-card">
              <span>♡</span>
              <div>
                <strong>Your health matters</strong>
                <small>We're here to guide you</small>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-footer">
          <span>© 2026 Health Buddy</span>
          <span>Care starts with awareness.</span>
        </div>

      </section>

      {/* RIGHT SIDE - LOGIN FORM */}
      <section className="login-form-section">

        <div className="login-form-container">

          <div className="mobile-login-brand">
            <span className="login-brand-icon">✚</span>
            Health <strong>Buddy</strong>
          </div>

          <div className="login-heading">
            <span className="welcome-label">WELCOME BACK</span>
            <h2>Sign in to your account</h2>
            <p>
              Enter your details below to access your Health Buddy account.
            </p>
          </div>

          {message && (
            <div className="login-error" role="alert">
              <span>!</span>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">♙</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="login-spinner"></span>
                  Signing you in...
                </>
              ) : (
                <>
                  Sign in to Health Buddy
                  <span>→</span>
                </>
              )}
            </button>

          </form>

          <div className="login-divider">
            <span>NEW TO HEALTH BUDDY?</span>
          </div>

          <p className="signup-prompt">
            Don't have an account?
            <Link to="/signup"> Create an account</Link>
          </p>

          <div className="login-security">
            <span>🔒</span>
            Your account information is protected.
          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;
