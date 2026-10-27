import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const inputStyle = {
  display: "block",
  width: "100%",
  marginBottom: 10,
  padding: 8,
  boxSizing: "border-box",
};

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
    <div style={{ maxWidth: 360, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h1>Health Buddy</h1>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={{ padding: "8px 16px" }}>Log in</button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <p>
        No account yet? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;