import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar component for PregnancyPal app
 * Provides navigation to different sections of the app
 * @param {Object} props - Component props
 * @param {string} props.activeSection - Current active section
 * @param {Function} props.onSectionChange - Handler for section changes
 */
const Sidebar = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'health', label: 'Health Tracker', icon: '❤️' },
    { id: 'medical', label: 'Medical Advice', icon: '🩺' },
    { id: 'support', label: 'Emotional Support', icon: '🧘‍♀️' },
    { id: 'resources', label: 'Resources', icon: '📚' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={`/${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
