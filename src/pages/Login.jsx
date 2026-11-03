import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="logo">🩺</div>
        <h1 className="brand">Health Buddy</h1>
        <p className="subtitle">Welcome back! Log in to continue</p>
        {message && <div className="error">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <button className="btn" type="submit">Log in</button>
        </form>
        <p className="switch-text">
          No account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;