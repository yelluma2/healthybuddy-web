import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  // Not logged in? Send them to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 500, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h1>Health Buddy</h1>
      <h2>Welcome, {name}!</h2>
      <p>Your symptom checker will appear here soon.</p>
      <button onClick={handleLogout} style={{ padding: "8px 16px" }}>
        Log out
      </button>
    </div>
  );
}

export default Dashboard;