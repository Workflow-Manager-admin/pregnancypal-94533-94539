import React from 'react';
import FeatureCard from '../common/FeatureCard';

/**
 * PUBLIC_INTERFACE
 * HealthTracker component for PregnancyPal app
 * Allows users to track various health metrics during pregnancy
 */
const HealthTracker = () => {
  return (
    <div className="health-tracker">
      <h2 className="section-title">Health Tracker</h2>
      <p className="section-description">
        Monitor your health during pregnancy. Track symptoms, weight, and vital signs.
      </p>

      <div className="tracker-cards">
        <FeatureCard title="Symptom Tracker" icon="🔍">
          <p>Record and monitor pregnancy symptoms</p>
          <div className="placeholder-buttons">
            <button className="btn">Add Symptom</button>
            <button className="btn btn-secondary">View History</button>
          </div>
        </FeatureCard>

        <FeatureCard title="Weight Tracker" icon="⚖️">
          <p>Track your weight throughout pregnancy</p>
          <div className="placeholder-chart">
            {/* Placeholder for weight chart */}
            <div className="chart-placeholder">
              Weight tracking chart will appear here
            </div>
          </div>
          <button className="btn">Add Weight Record</button>
        </FeatureCard>

        <FeatureCard title="Blood Pressure" icon="❤️">
          <p>Monitor your blood pressure readings</p>
          <div className="placeholder-chart">
            {/* Placeholder for BP chart */}
            <div className="chart-placeholder">
              Blood pressure chart will appear here
            </div>
          </div>
          <button className="btn">Add BP Reading</button>
        </FeatureCard>

        <FeatureCard title="Kick Counter" icon="👣">
          <p>Track your baby's movements</p>
          <div className="placeholder-counter">
            <button className="btn btn-large">Record Kick</button>
            <div className="counter-display">
              <p>Today's kicks: 0</p>
              <p>Start a new session to track kicks</p>
            </div>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};

export default HealthTracker;
