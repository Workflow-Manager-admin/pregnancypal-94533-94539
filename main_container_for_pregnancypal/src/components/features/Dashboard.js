import React from 'react';
import FeatureCard from '../common/FeatureCard';

/**
 * PUBLIC_INTERFACE
 * Dashboard component for PregnancyPal app
 * Shows an overview of the user's pregnancy journey
 */
const Dashboard = () => {
  // Placeholder data - would be fetched from API in a real implementation
  const pregnancyData = {
    currentWeek: 24,
    dueDate: 'September 15, 2023',
    babySize: 'the size of a cantaloupe',
    nextAppointment: 'May 30, 2023',
  };

  return (
    <div className="dashboard">
      <h2 className="section-title">Your Pregnancy Journey</h2>
      
      <div className="pregnancy-progress">
        <div className="progress-info">
          <h3>Week {pregnancyData.currentWeek}</h3>
          <p>Due date: {pregnancyData.dueDate}</p>
          <p>Baby is currently {pregnancyData.babySize}</p>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-indicator" 
            style={{ width: `${(pregnancyData.currentWeek / 40) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="dashboard-cards">
        <FeatureCard title="Upcoming Appointments" icon="📅">
          <p>Next check-up: {pregnancyData.nextAppointment}</p>
          <button className="btn btn-secondary">View All</button>
        </FeatureCard>

        <FeatureCard title="Recent Activity" icon="📝">
          <p>You logged a new symptom yesterday</p>
          <p>Added new weight record 3 days ago</p>
          <button className="btn btn-secondary">View More</button>
        </FeatureCard>

        <FeatureCard title="Today's Tips" icon="💡">
          <p>Remember to stay hydrated</p>
          <p>Try gentle stretching for back pain</p>
          <button className="btn btn-secondary">More Tips</button>
        </FeatureCard>
      </div>
    </div>
  );
};

export default Dashboard;
