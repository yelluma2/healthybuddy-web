import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="brand">🩺 Health Buddy</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="dashboard">
        <h2 className="welcome">Hello, {name}! 👋</h2>
        <p className="welcome-sub">How are you feeling today?</p>

        <div className="cards">
          <div className="card symptoms">
            <div className="icon">🤒</div>
            <h3>Check Symptoms</h3>
            <p>Tell Health Buddy what you feel and get possible causes.</p>
            <span className="badge">Coming soon</span>
          </div>

          <div className="card firstaid">
            <div className="icon">🩹</div>
            <h3>First Aid Tips</h3>
            <p>Simple steps you can take at home before seeing a doctor.</p>
            <span className="badge">Coming soon</span>
          </div>

          <div className="card emergency">
            <div className="icon">🚨</div>
            <h3>Emergency Alerts</h3>
            <p>Get warned when your symptoms need a doctor right away.</p>
            <span className="badge">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;