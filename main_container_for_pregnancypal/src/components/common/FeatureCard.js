import React from 'react';

/**
 * PUBLIC_INTERFACE
 * FeatureCard component for PregnancyPal app
 * Displays content in a consistent card format
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.icon - Emoji icon for the card
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS class names
 */
const FeatureCard = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-card-header">
        <span className="feature-icon">{icon}</span>
        <h3 className="feature-title">{title}</h3>
      </div>
      <div className="feature-card-content">
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
