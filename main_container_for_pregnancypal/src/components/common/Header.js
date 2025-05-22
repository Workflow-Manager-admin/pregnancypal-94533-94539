import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header component for PregnancyPal app
 * Displays the app name, logo, and user controls
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">👶</span>
            <span className="app-name">PregnancyPal</span>
          </div>
          <div className="user-controls">
            <button className="btn btn-secondary">Profile</button>
            <button className="btn">Settings</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
