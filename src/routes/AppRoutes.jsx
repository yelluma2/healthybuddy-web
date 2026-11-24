import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Portal from "../pages/Portal";
import AboutUs from "../pages/aboutUs";
import Settings from "../pages/settings";

// Every page in the app is listed here.
// protected: true  -> only logged-in users can open it
const routes = [
  { path: "/", element: <Navigate to="/landing" replace /> },
  { path: "/landing", element: <Landing /> },
  { path: "/portal", element: <Portal /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard />, protected: true },
  { path: "/about", element: <AboutUs /> },
  { path: "/settings", element: <Settings />, protected: true }
];

function AppRoutes() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      {routes.map(({ path, element, protected: needsLogin }) => (
        <Route
          key={path}
          path={path}
          element={
            needsLogin && !isLoggedIn ? (
              <Navigate to="/login" replace />
            ) : (
              element
            )
          }
        />
      ))}
      {/* Any unknown address goes back to the start */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
  