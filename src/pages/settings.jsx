import { useState } from "react";
import "../index.css";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Healthy Buddy User",
    email: "user@example.com",
  });

  const [settings, setSettings] = useState({
    notifications: true,
    healthAlerts: true,
    emailUpdates: false,
    darkMode: false,
    shareData: false,
  });

  const [language, setLanguage] = useState("English");
  const [saved, setSaved] = useState(false);

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    setSaved(false);
  };

  const saveSettings = () => {
    // Save locally for this frontend demonstration.
    localStorage.setItem(
      "healthyBuddySettings",
      JSON.stringify({ profile, settings, language })
    );

    setSaved(true);
  };

  return (
    <div className="hb-page">
      <div className="hb-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your account and application preferences.</p>
        </div>
        <div className="hb-header-icon">⚙️</div>
      </div>

      {/* PROFILE */}
      <section className="hb-settings-card">
        <div className="hb-settings-heading">
          <span>👤</span>
          <div>
            <h2>Profile Information</h2>
            <p>Manage your personal account details.</p>
          </div>
        </div>

        <div className="hb-input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="hb-input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Enter your email"
          />
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="hb-settings-card">
        <div className="hb-settings-heading">
          <span>🔔</span>
          <div>
            <h2>Notifications</h2>
            <p>Control the notifications you receive.</p>
          </div>
        </div>

        <SettingToggle
          title="Push Notifications"
          description="Receive application notifications."
          checked={settings.notifications}
          onChange={() => toggleSetting("notifications")}
        />

        <SettingToggle
          title="Health Alerts"
          description="Receive important health-related alerts."
          checked={settings.healthAlerts}
          onChange={() => toggleSetting("healthAlerts")}
        />

        <SettingToggle
          title="Email Updates"
          description="Receive updates through your email."
          checked={settings.emailUpdates}
          onChange={() => toggleSetting("emailUpdates")}
        />
      </section>

      {/* APPEARANCE */}
      <section className="hb-settings-card">
        <div className="hb-settings-heading">
          <span>🎨</span>
          <div>
            <h2>Appearance</h2>
            <p>Customize how Healthy Buddy looks.</p>
          </div>
        </div>

        <SettingToggle
          title="Dark Mode"
          description="Enable a darker application appearance."
          checked={settings.darkMode}
          onChange={() => toggleSetting("darkMode")}
        />

        <div className="hb-input-group">
          <label>Preferred Language</label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setSaved(false);
            }}
          >
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="hb-settings-card">
        <div className="hb-settings-heading">
          <span>🔒</span>
          <div>
            <h2>Privacy & Security</h2>
            <p>Manage your personal information.</p>
          </div>
        </div>

        <SettingToggle
          title="Data Sharing"
          description="Allow optional sharing of your data."
          checked={settings.shareData}
          onChange={() => toggleSetting("shareData")}
        />

        <div className="hb-security-note">
          🔐 Your health information should be handled
          securely and only according to your privacy settings
          and the application's privacy policy.
        </div>
      </section>

      {/* SAVE BUTTON */}
      <div className="hb-save-area">
        {saved && (
          <span className="hb-success">
            ✓ Settings saved successfully!
          </span>
        )}

        <button className="hb-save-button" onClick={saveSettings}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SettingToggle({ title, description, checked, onChange }) {
  return (
    <div className="hb-toggle-row">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <label className="hb-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="hb-slider"></span>
      </label>
    </div>
  );
}

export default Settings;